
(function () {
    var contactApp = angular.module("PhoneBookApp");
    contactApp.controller("PhoneBookAppCtrl", PhoneBookAppCtrl);

    function PhoneBookAppCtrl(contactDetailsSvc) {

        console.log("Iam PhoneBookAppCtrl !!!!");
        this.contacts = contactDetailsSvc.contacts;
        this.selectContact = function (index) {
            this.selectedContact = this.contacts[index];
        }
    }
})();