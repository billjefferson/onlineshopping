(function () {
    "use strict";
    var app = angular.module("OnlineShoppingApp");

    var ProductController = function ($scope, $http) {
        var productParam = {
            "name": "",
            "startPage": 100000,
            "rowsPerPage": 10
        }

        $scope.list = [];
        $http.post("http://localhost:50311/api/customer/getproduct", JSON.stringify(productParam)).then(
            function (response) {
                if (response.data) {
                    $scope.list = response.data;
                }
            },
            function (response) {

            }
        )
    }

    //https://stackoverflow.com/questions/18698963/i-dont-understand-the-use-of-inject-in-controllers
    ProductController.$inject = ["$scope", "$http"];

    app.controller("ProductController", ProductController);

})();