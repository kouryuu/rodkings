var myApp = angular.module('Blog',[]);

myApp.controller('mainContent',['$scope','$http','$log',function($scope,$http,$log){
  $scope.tag = "All"
  $scope.posts = [];
  $scope.error = false;
  var drawPosts = (function (all,tag,response){
    // Check the keys in the array and stores it in categories
    $scope.categories = [];
    Object.keys(response.data).forEach(
      function(key)
      {
        $scope.categories.push(key);
      }
    );
    // Iterate over all posts and store them in posts
    $scope.posts = [];
    if(all){
     cat_length = $scope.categories.length
   }else{
     cat_length = 1
   }
    for(i=0;i < cat_length; i++){
      if(all){
      category = $scope.categories[i];
      postCategory = response.data[category];
      }
      else{
        postCategory = response.data[tag];

      }
      for(j=0;j < postCategory.length;j++){

        $scope.posts.push(postCategory[j]);
      }
    }
    $scope.$apply();
  });
  var getPosts = (function(){
    $http({
    method: 'GET',
    url: '/posts.json'
      }).then(function successCallback(response) {
       if(location.hash == ""){
         drawAll(response);
       }else{

         $log.log(response);
        var tag = location.hash;
        tag = tag.replace("#","");
        generateJSONbyTag(tag,response);
        $scope.postJSON = response;
       }



    }, function errorCallback(response) {
      $scope.postJSON = {};
      $scope.posts = [{"title":"Something went wrong while retrieving posts.","teaser":"Try refreshing your browser."}]
    });
  });
    getPosts();
    var drawAll = (function (response) {
        drawPosts(true,null,response);
      });
    $(window).hashchange( function(){
      getPosts();
    });
    var generateJSONbyTag = (function (tag,postsJSON){
        $scope.tag = tag;
        drawPosts(false,tag,postsJSON);
    })

}]);
