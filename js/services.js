var webApp = angular.module('webAppService', []);
webApp.service('ecommerceServices', function($http) {
    console.log('service running')

    var baseUrl = 'https://assignment-appstreet.herokuapp.com/api/v1/products';

    // var url = 'https://assignment-appstreet.herokuapp.com/api/v1/products?page=1';
    // var url = 'https://assignment-appstreet.herokuapp.com/api/v1/products/5aec58965a39460004b3f6dd';
    return {
        getProducts: function() {
            var url = baseUrl + '?page=1';
            return $http.get(url, { cache: true }).then(function(data) {
                return data.data.products;
            });
        },
        getProductDetail: function(productId) {
            var url = baseUrl + '/' + productId;
            return $http.get(url, { cache: true }).then(function(data) {
                return data.data;
            });
        }
    }
});