var app = angular.module('twitterClone');

app.controller('mainCtrl', function($scope, parseService){
  //In your controller you'll have a getParseData function and a postData function, but should be placed on $scope.
  
 

  $scope.getParseData = function (){
    var thing = parseService.getData();
    thing.then(function(data){
      $scope.messages = data.data.results;
    });
  }

  $scope.postData = function (){
    parseService.postData($scope.message);
    $scope.message = "";
  }

  
  //The getParseData function will call the getData method on the parseService object. You'll then save the result of that request to 
  //your controllers $scope as messages ($scope.messages)



  //The postData function will take whatever the user typed in (hint: look at the html and see what ng-model correlates to on the input box),
  //pass that text to the postData method on the parseService object which will then post it to the parse backend.



   setInterval(function(){
     $scope.getParseData();
   }, 1500)
})
