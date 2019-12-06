(function () {
    "use strict";
    var app = angular.module("OnlineShoppingApp", ["ngRoute", "ngAnimate", "ngSanitize", "ui.bootstrap"]);

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

    app.factory('OverlayService', function () {
        return {
            overlay: function () {

            }
        }
    });

})();