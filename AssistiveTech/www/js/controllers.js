angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('categoryCtrl', [ '$scope','$rootScope', function($scope, $rootScope) {
  
  $scope.setTab=[];
  $rootScope.catFiltText=[];
  $scope.playlists = [
    { title: 'Accessibility', id: 1 },
    { title: 'Vision', id: 2 },
    { title: 'Hearing', id: 3 },
    { title: 'Daily Living', id: 4 },
    { title: 'Education', id: 5 },
    { title: 'Software', id: 6 }
  ];
        $scope.select = function(setTab) {
          console.log(setTab);
          console.log($scope.playlists[setTab-1]);
          $rootScope.categoryId = setTab;
          $rootScope.catFiltText = $scope.playlists[setTab-1].title;               
          //$rootScope.selectedItem = $scope.items[$scope.itemId];
       };
}])

.controller('browseCtrl', ['$scope','browseList','$ionicModal','baseURL', function($scope, browseList, $ionicModal,baseURL){
      
      $scope.baseURL = baseURL;
      $scope.lists=[];
      //load from service

      browseList.query(
        function(response) {
          $scope.lists = response;
           },
        function(response) {
          $scope.message = "Error: "+response.status + " " + response.statusText;
        });
           
      console.log($scope.lists);
      console.log($scope);
      
}])

//.controller('categoriesCtrl', ['$scope', '$rootScope', 'categoryList','$ionicModal','baseURL', function($scope, $rootScope,categoryList, $ionicModal,baseURL){
//      
//      $scope.baseURL = baseURL;
//      $scope.categories=[];
//      //load from service
//
//      categoryList.query(
//        function(response) {
//          $scope.categories = response;
//           },
//        function(response) {
//          $scope.message = "Error: "+response.status + " " + response.statusText;
//        });
//           
//      console.log($scope.categories);
//      console.log($scope);
//      
//      $scope.select = function(setTab) {
//          $scope.tab = setTab;
//          //$rootScope.filtText = $scope.categories[$scope.tab].name;               
//       };
//}])

.controller('itemsCrtl', ['$scope', '$rootScope', 'itemsList','$ionicModal','baseURL', function($scope, $rootScope,itemsList, $ionicModal,baseURL){
      
      $scope.baseURL = baseURL;
      $rootScope.items=[];
      //$rootScope.selectedItem =[];
      //$scope.itemId =1;
      //load from service
      //console.log($rootScope.selectedItem);
  
      itemsList.query(
        function(response) {
          $rootScope.items = response;
           },
        function(response) {
          $scope.message = "Error: "+response.status + " " + response.statusText;
        });
           
      console.log($rootScope.items);
      console.log($rootScope.catFiltText);
      
      $scope.selectItem = function(setTab) {
          $rootScope.itemId = setTab;
          //$rootScope.filtText = $scope.items[$scope.itemId].name;               
          //$rootScope.selectedItem = $rootScope.items[$rootScope.itemId-1];
          // console.log($rootScope.selectedItem);

       };
  
}])
.controller('itemCrtl', ['$scope', '$rootScope', 'itemsList','$ionicModal','baseURL', function($scope, $rootScope,itemsList, $ionicModal,baseURL){
      
      $scope.baseURL = baseURL;
      //
      //itemsList.query(
      //  function(response) {
      //    $rootScope.items = response;
      //     },
      //  function(response) {
      //    $scope.message = "Error: "+response.status + " " + response.statusText;
      //  });
      //     
           console.log($rootScope.itemId);
           console.log(parseInt($rootScope.itemId));
           
          $scope.selectedItem = $rootScope.items[parseInt($rootScope.itemId)];
           console.log($scope.selectedItem);


  
}])
//.controller('PlaylistCtrl', function($scope, $stateParams) {
//});
