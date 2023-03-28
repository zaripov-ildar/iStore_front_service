angular.module('market').controller('ordersController', function ($scope, $http, $localStorage) {
    $scope.loadOrders = function () {
        $http.get('http://localhost:5555/core/api/v1/orders')
            .then(function (response) {
                console.log(response.data);
                $scope.orders = response.data;
            });
    };

    $scope.loadOrders();
});