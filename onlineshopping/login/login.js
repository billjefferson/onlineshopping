(function () {
    "use strict";
    var app = angular.module("OnlineShoppingApp");

    var LogInController = function ($scope, $http) {
        $scope.txtUsername = "";
        $scope.txtPassword = "";

        $scope.btnLogIn_click = function () {
            var loginParam = {
                "username": $scope.txtUsername,
                "password": $scope.txtPassword
            }
            $http.post("http://localhost:50311/api/customer/login", JSON.stringify(loginParam)).then(
                function (response) {
                    if (response.data) {
                        if (response.data == "1") {

                        } else if (response.data == "2") {

                        } else {

                        }
                    }
                },
                function () {

                }
            )
        }
    }

    LogInController.$inject = ["$scope", "$http"];

    app.controller("LogInController", LogInController);

})();