angular.module('market').controller('cartController', function ($scope, $http, $localStorage) {
    $scope.loadCart = function () {
        $http.get('http://localhost:5555/cart/api/v1/cart/' + $localStorage.guestCartId)
            .then(function (response) {
                $scope.cart = response.data;
            });
    };

    $scope.createOrder = function () {
        if (!$localStorage.marketUser) {
            $scope.guestCreateOrder();
        } else
            $http.post('http://localhost:5555/core/api/v1/orders/' + $localStorage.guestCartId)
                .then(function (response) {
                    $scope.loadCart();
                });
    }

    $scope.guestCreateOrder = function () {
        alert('Для оформления заказа необходимо войти в учетную запись');
    }

    $scope.loadCart();
});