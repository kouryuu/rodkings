var myApp = angular.module('Blog',[]);

myApp.controller('mainContent',['$scope','$http','$log',function($scope,$http,$log){
  $scope.posts = [];
  $scope.error = false;
  $http({
    method: 'GET',
    url: '/posts.json'
  }).then(function successCallback(response) {
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

    for(i=0;i < $scope.categories.length; i++){
      category = $scope.categories[i];
      postCategory = response.data[category];

      for(j=0;j < postCategory.length;j++){
        $scope.posts.push(postCategory[j]);
      }
    }
    $log.log($scope.posts);

    //response.data


    }, function errorCallback(response) {

    });


}]);
