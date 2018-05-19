angular.module('webAppControllers', ['webAppService'])
    .controller('HomeController', function($scope, $state, $window, $stateParams, ecommerceServices) {
        ecommerceServices.getProducts().then(function(response) {
            $scope.productList = response;
        }, function(error) {

        });

        $scope.removeSpace = function(name) {
            return name.replace(/ /g, '-');
        }
    })

    .controller('productDetailController', function($scope, $state, $window, $stateParams, ecommerceServices, $stateParams) {
        var productId = $stateParams.Id;
        var productDetail;
        ecommerceServices.getProductDetail(productId).then(function(response) {
            productDetail = response;
            setVariables();
        }, function(error) {

        });

        function setVariables() {
            $scope.detailObject = productDetail.primary_product;
            $scope.productAttributes = productDetail.attributes;
            for (var index in $scope.productAttributes) {
                var optionsArray = productDetail.options.filter(function(object) {
                    return object.attrib_id == $scope.productAttributes[index]._id;
                })
                $scope.productAttributes[index]['types'] = optionsArray;
            }

            $scope.productVariations = productDetail.product_variations;

            // add prodcut variation -- the first object that comes with seperated selected option field -- append it here     
        }
    })






// $scope.productAttributes-- - [{
//         "_id": "5aec58955a39460004b3f6d0",
//         "name": "Storage",
//         "types": [{
//                 "_id": "5aec58955a39460004b3f6d3",
//                 "attrib_id": "5aec58955a39460004b3f6d0",
//                 "name": "1.5GB"
//             },
//             {
//                 "_id": "5aec58955a39460004b3f6d4",
//                 "attrib_id": "5aec58955a39460004b3f6d0",
//                 "name": "2GB"
//             }
//         ]
//     },
//     {
//         "_id": "5aec58955a39460004b3f6d1",
//         "name": "Colour",
//         "types": [{
//                 "_id": "5aec58955a39460004b3f6d5",
//                 "attrib_id": "5aec58955a39460004b3f6d1",
//                 "name": "Black"
//             },
//             {
//                 "_id": "5aec58955a39460004b3f6d6",
//                 "attrib_id": "5aec58955a39460004b3f6d1",
//                 "name": "Gold"
//             }
//         ]
//     }
// ]