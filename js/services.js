var webApp = angular.module('webAppService', []);
webApp.service('ecommerceServices', function($http) {
    // var baseUrl = 'https://assignment-appstreet.herokuapp.com/api/v1/products';
    // var activePage;
    // return {
    //     getProducts: function(pageNum) {
    //         var url = baseUrl + '?page=' + pageNum;
    //         return $http.get(url, { cache: true }).then(function(data) {
    //             return data.data.products;
    //         });
    //     },
    //     getProductDetail: function(productId) {
    //         var url = baseUrl + '/' + productId;
    //         return $http.get(url, { cache: true }).then(function(data) {
    //             return data.data;
    //         });
    //     },
    //     setPageActive: function(page) {
    //         activePage = page;
    //     },
    //     getPageActive: function() {
    //         return activePage;
    //     }
    // }
});