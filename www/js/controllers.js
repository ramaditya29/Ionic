angular.module('starter.controllers', [])


.controller('loginCtrl', function($scope, LoginService, $ionicPopup, $state) {
    $scope.data = {};

    $scope.login = function() {
        LoginService.loginUser($scope.data.username, $scope.data.password).success(function(data) {
            $state.go('tab.dash');
        }).error(function(data) {
            var alertPopup = $ionicPopup.alert({
                title: 'Login failed!',
                template: 'Please check your credentials!'
            });
        });
    }
})
.controller('DashCtrl', function($scope, Chats,$ionicPopup, $state) {
    
  var id = 5;
    $scope.blog = {};
    //$scope.blog = { postname : '', content: ''};
    $scope.postData = function(){
        console.log($scope.blog.postname + $scope.blog.content);
        Chats.insertData({id: id, name: $scope.blog.postname, content: $scope.blog.content});
        var alertPopup = $ionicPopup.alert({
                title: 'Message',
                template: 'Created Succesfully'
            });
        id = id + 1;$scope.blog ={postname : '', content: ''};
        $state.go('tab.chats');
    };

})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.posts = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.post = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
