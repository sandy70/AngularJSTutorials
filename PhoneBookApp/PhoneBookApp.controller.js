
(function () {
    var contactApp = angular.module("PhoneBookApp");
    contactApp.controller("PhoneBookAppCtrl", PhoneBookAppCtrl);

    function PhoneBookAppCtrl(contactDetailsSvc) {
        var self = this;
        console.log("Iam PhoneBookAppCtrl !!!!");
        this.contacts = contactDetailsSvc.getContacts()
                                         .then(function(data){
                            self.contacts = data;
        });
        this.selectContact = function (index) {
            this.selectedContact = this.contacts[index];
        }
    }
})();