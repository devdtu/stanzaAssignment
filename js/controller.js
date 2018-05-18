angular.module('webAppControllers', ['webAppService'])
    .controller('HomeController', function($scope, $state, $window, $stateParams) {
        console.log("controller called");
    })