var myApp = angular.module('myApp', []);

myApp.controller('ViewController', ['$scope', 'DataService', function($scope, DataService) {
  $scope.messageObject = DataService.messageObject;
  $scope.newMessage = DataService.newMessage;
  $scope.getData = DataService.getData;
  $scope.postData = DataService.postData;
  $scope.getData();
}]);//end ViewController

//==========================================================================================//

myApp.factory('DataService', ['$http', function($http){
    var messageObject = {
      messages : []
    };
    var newMessage = {
      name : '',
      message : ''
    };

    function getData(){
      $http.get('/messages').then(function(response){
        messageObject.messages = response.data;
      });
    }//end getData

    function postData(message){
      $http.post('/messages', message).then(function(response){
      });
      getData();
    }//end postData

    return {
      newMessage : newMessage,
      messageObject : messageObject,
      getData  : getData,
      postData : postData
    };
}]);
