// service service will invoke AuthorDetailsSvc func in constructor mode

(function() {
    var contactApp = angular.module("PhoneBookApp");
    contactApp.service("AuthorDetailsSvc", AuthorDetailsSvc);

    function AuthorDetailsSvc() {
        console.log("AuthorDetailsSvc called");
        this.author = "sandeep";
        this.builtTime = new Date().toDateString();
    }
})();
