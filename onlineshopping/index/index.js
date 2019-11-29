(function () {
    "use strict";
    var app = angular.module("OnlineShoppingApp", ["ngRoute"]);

    app.config(function ($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "login/partial-login.html",
                controller: "LogInController"
            })
            .when("/product", {
                templateUrl: "product/partial-productlist.html",
                controller: "ProductController"
            })
            
    });

})();