angular.module('market').controller('productsController', function ($scope, $http, $localStorage) {
    $scope.filter = {
        page: 1,
        pageSize: 5,
        minPrice: null,
        maxPrice: null,
        titlePart: null
    };

    $scope.loadProducts = function (page = 1) {
        console.log($scope.filter);
        $scope.filter.page = page
        $http({
            method: 'GET',
            url: 'http://localhost:5555/core/api/v1/products',
            params: $scope.filter
        }).then(function (response) {
            console.log(response.data);
            $scope.products = response.data.products;
            $scope.generatePagesList(response.data.totalPages);
        });
    };

    $scope.addToCart = function (id) {
        console.log($localStorage.guestCartId)
        $http.get('http://localhost:5555/cart/api/v1/cart/' + $localStorage.guestCartId + '/add/' + id)
    }

    $scope.generatePagesList = function (totalPages) {
        out = [];
        for (let i = 0; i < totalPages; i++) {
            out.push(i + 1);
        }
        $scope.pagesList = out;
    }

    $scope.loadProducts();
});