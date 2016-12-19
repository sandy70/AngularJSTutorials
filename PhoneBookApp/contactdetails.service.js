(function(){
var contactApp = angular.module("PhoneBookApp");
contactApp.service("contactDetailsSvc" , function($http){
    console.log("contactDetailsSvc called");
    var self = this;
    self.getContacts = function(){
        console.log("inside anonymous function");
        var promise1 = $http.get('http://localhost:3000/contacts');
        var promise2 = promise1.then(function(response){
            return response.data;
        });

        return promise2;
    }

        console.log(this.contacts);
});
})();