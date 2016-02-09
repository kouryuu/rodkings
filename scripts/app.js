var myApp = angular.module('Blog',[]);

myApp.controller('mainContent',['$scope','$http','$log',function($scope,$http,$log){
  $scope.posts = [];
  $scope.error = false;
  var drawPosts = function (all,tag,response){
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
    $log.log($scope.posts)
  }
  getPosts = function(){
    $http({
    method: 'GET',
    url: '/posts.json'
      }).then(function successCallback(response) {
      $scope.postJSON = response;


    }, function errorCallback(response) {
      $scope.postJSON = {};
      $scope.posts = [{"title":"Something went wrong while retrieving posts.","teaser":"Try refreshing your browser."}]
    });
    }
    drawPosts(true,null,$scope.postJSON);
    $(window).hashchange( function(){

      var tag = location.hash;
      if(tag != "#UX"){
        $log.log('Hola')
        if($scope.postJSON != undefined && $scope.postJSON != {}){
          drawPosts(false,'UX',$scope.postJSON);
        }else{
          $scope.posts = [{"title":"Something went wrong while retrieving posts.","teaser":"Try refreshing your browser."}]
        }
      }
    });

}]);


// var route = crossroads.addRoute('#{tag}',function(tag){
//   console.log(tag);
// });
// route.matched.add(console.log, console);

$(function(){

  // Bind the event.


  // Trigger the event (useful on page load).
  $(window).hashchange();

});
