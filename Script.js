 /// <reference path="angular.min.js" />
var myApp = angular.module("MyApp", []);
    myApp.controller("myController" , Update);
    myApp.controller("Cntrl1", Controller1);
    myApp.controller("Cntrl2", Controller2);
   function Update($scope){
      $scope.updateTime = function(){
        var date = new Date();
        $scope.date = date.toTimeString();
      }
    };

    function Controller1($scope){
        console.log("Cntrl1 called");
        $scope.message = "Cntrl1 called";
    }

    function Controller2($scope){
       console.log("Cntrl2 called");
      //   $scope.message = "Cntrl2 called";
    }