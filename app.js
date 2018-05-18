// console.log("app.js loaded");
// // , 'ngMaterial'
// // 
// angular.module('ecommerce', ['ui.router', 'webAppControllers'])
//     .run(function($state, $rootScope, $window, $timeout, $transitions, workspaceServices) {
//         console.log("app running");
//     })
//     .config(function($stateProvider, $urlRouterProvider, $mdThemingProvider) {
//         // $compileProvider.debugInfoEnabled(false);
//         // $mdThemingProvider.definePalette('amazingPaletteName', {
//         //     '50': 'E3F2FD',
//         //     '100': 'BBDEFB',
//         //     '200': '90CAF9',
//         //     '300': '64B5F6',
//         //     '400': '42A5F5',
//         //     '500': '44c8f5', // defauly for primary
//         //     '600': '1E88E5',
//         //     '700': '1976D2',
//         //     '800': '1565C0',
//         //     '900': '003244', //-- darkest
//         //     'A100': '82B1FF',
//         //     'A200': '448AFF',
//         //     'A400': '2979FF',
//         //     'A700': '0098ae', //-- medium
//         //     'contrastDefaultColor': 'light', // whether, by default, text (contrast)
//         //     // on this palette should be dark or light
//         //     'contrastDarkColors': ['50', '100', //hues which contrast should be 'dark' by default
//         //         '200', '300', '400', 'A100'
//         //     ],
//         //     'contrastLightColors': undefined // could also specify this if default was 'dark'
//         // });

//         // $mdThemingProvider.theme('default')
//         //     .primaryPalette('amazingPaletteName')

//         $urlRouterProvider.otherwise('/');
//         $stateProvider
//             .state('home', {
//                 url: '/',
//                 title: 'e-Commerce app',
//                 description: "e-Commerce app",
//                 views: {
//                     "main-view": {
//                         templateUrl: 'templates/home.html',
//                         controller: 'HomeController'
//                     }
//                 }
//             })
            

//         $locationProvider.html5Mode({
//             enabled: true,
//             requireBase: true
//         });

//     });

console.log("app.js loaded");

// 'ngMaterial',

angular.module('ecommerce', ['ui.router', 'webAppControllers'])
    .run(function() {
        console.log("app running");
    })
    .config(function($stateProvider, $urlRouterProvider) {
        // $compileProvider.debugInfoEnabled(false);
        // $mdThemingProvider.definePalette('amazingPaletteName', {
        //     '50': 'E3F2FD',
        //     '100': 'BBDEFB',
        //     '200': '90CAF9',
        //     '300': '64B5F6',
        //     '400': '42A5F5',
        //     '500': '44c8f5', // defauly for primary
        //     '600': '1E88E5',
        //     '700': '1976D2',
        //     '800': '1565C0',
        //     '900': '003244', //-- darkest
        //     'A100': '82B1FF',
        //     'A200': '448AFF',
        //     'A400': '2979FF',
        //     'A700': '0098ae', //-- medium
        //     'contrastDefaultColor': 'light', // whether, by default, text (contrast)
        //     // on this palette should be dark or light
        //     'contrastDarkColors': ['50', '100', //hues which contrast should be 'dark' by default
        //         '200', '300', '400', 'A100'
        //     ],
        //     'contrastLightColors': undefined // could also specify this if default was 'dark'
        // });

        // $mdThemingProvider.theme('default')
        //     .primaryPalette('amazingPaletteName')

        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('home', {
                url: '/',
                title: 'e-Commerce app',
                description: "e-Commerce app",
                views: {
                    "main-view": {
                        templateUrl: 'templates/home.html',
                        controller: 'HomeController'
                    }
                }
            })
            

        // $locationProvider.html5Mode({
        //     enabled: true,
        //     requireBase: true
        // });

    });