(function () {
    "use strict";
    var app = angular.module("OnlineShoppingApp");

    var ModalInstanceController = function ($scope, $modalInstance, items) {
        $scope.items = items;
        $scope.selected = {
            item:$scope.items[0]
        };

        $scope.ok = function () {
            $modalInstance.close($scope.selected.item);
            //$modalInstance.dismiss('cancel');
        };

        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        }
    }

    ModalInstanceController.$inject = ["$scope", "$modalInstance", "items"];

    app.controller("ModalInstanceController", ModalInstanceController);

})();