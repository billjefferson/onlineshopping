(function () {
    "use strict";
    var app = angular.module("OnlineShoppingApp");

    var LogInController = function ($scope, $http, $modal, $log, $location) {
        var animationEnabled = true;
        var size = 'lg';

        $scope.txtUsername = "";
        $scope.txtPassword = "";
        $scope.warnUsername = "";
        $scope.warnPassword = "";

        //$scope.items = ['item1', 'item2', 'item3'];

        $scope.btnLogIn_click = function () {
            var loginParam = {
                "username": $scope.txtUsername,
                "password": $scope.txtPassword
            }

            //var modalInstance = $modal.open({
            //    templateUrl: '/modal/modal.html',
            //    controller: 'ModalInstanceController',
            //    size: size,
            //    resolve: {
            //        items: function () {
            //            return $scope.items;
            //        }
            //    }
            //});

            //modalInstance.result.then(function (selectedItem) {
            //    $scope.selected = selectedItem;
            //}, function () {
            //    $log.info('Modal dismissed at: ' + new Date());
            //})
            
            $http.post("http://localhost:50311/api/customer/login", JSON.stringify(loginParam)).then(
                function (response) {
                    if (response.data) {
                        if (response.data == "1") {
                            $location.path("/product");
                        } else if (response.data == "2") {
                            $scope.warnPassword = "Wrong Password!";
                        } else {
                            $scope.warnUsername = "Wrong Username!";
                            $scope.warnPassword = "Wrong Password!";
                        }
                    }
                },
                function () {

                }
            )
        }
    }

    

    LogInController.$inject = ["$scope", "$http", "$modal", "$log", "$location"];

    app.controller("LogInController", LogInController);

})();