angular.module('webAppControllers', ['webAppService', 'ksSwiper', 'infinite-scroll'])
    .controller('HomeController', function($scope, $state, $window, $stateParams, ecommerceServices) {
        $scope.genderSelected = function(gender) {
            $scope.selectedGender = gender;
        }
        $scope.activeIndex = 0;

        $scope.prevClicked = function() {
            if ($scope.activeIndex == 0) {
                return;
            }

            $scope.activeIndex = $scope.activeIndex - 1;
        }

        $scope.nextClicked = function() {
            if ($scope.activeIndex == 3) {
                return;
            }
            $scope.activeIndex = $scope.activeIndex + 1;
        }

        $scope.citySelected = function(city) {
            $scope.selectedCity = city;
        }

        $scope.amenitiesArray = [{
                "img": '../img/study.svg',
                "name": 'stanza springboard'
            },
            {
                "img": '../img/study.svg',
                "name": 'stanza springboard'
            },
            {
                "img": '../img/study.svg',
                "name": 'stanza springboard'
            },
            {
                "img": '../img/study.svg',
                "name": 'stanza springboard'
            },
            {
                "img": '../img/study.svg',
                "name": 'stanza springboard'
            },
            {
                "img": '../img/study.svg',
                "name": 'stanza springboard'
            },
            {
                "img": '../img/study.svg',
                "name": 'stanza springboard'
            },
            {
                "img": '../img/study.svg',
                "name": 'stanza springboard'
            },
            {
                "img": '../img/study.svg',
                "name": 'stanza springboard'
            }, {
                "img": '../img/study.svg',
                "name": 'stanza springboard'
            }
        ];
    })


    .controller('parentController', function($scope, $state, $window, $stateParams, ecommerceServices) {

    })
    .controller('IndexController', function($scope, $state, $window, $stateParams, ecommerceServices) {})

    .controller('productDetailController', function($scope, $state, $window, $stateParams, ecommerceServices, $stateParams) {

    })