angular.module('webAppControllers', ['webAppService', 'ksSwiper'])
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
        $scope.productCount = 1;

        ecommerceServices.getProductDetail(productId).then(function(response) {
            productDetail = response;
            setVariables();
        }, function(error) {

        });

        $scope.onReadySwiper = function(swiper) {
            swiper.initObservers();
        }

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

            setSelectedAttribute();
            // add prodcut variation -- the first object that comes with seperated selected option field -- append it here     
        }

        $scope.decreementProduct = function() {
            if (($scope.productCount - 1) >= 0) {
                $scope.productCount = $scope.productCount - 1;
            }
        }

        $scope.attributeSelect = function(attribute, optionSelected) {
            for (var index in $scope.productAttributes) {
                if ($scope.productAttributes[index]._id == attribute._id) {
                    $scope.productAttributes[index]['selected'] = JSON.parse(JSON.stringify(optionSelected));
                }
            }

            var selectedvariant = getSelectedVariant();
        }

        function getSelectedVariant() {
            var allSelectedProductId = [];

            for (var index in $scope.productAttributes) {
                //collect all the selected field and then search object which contain all the fields in $scope.productVariations
                allSelectedProductId.push($scope.productAttributes[index].selected._id);
            }

            // now allSelectedProductId contains _id of options that are currently selected
            // now we will check the $scope.productVariations for an object which contains all this _id's
            var selectedFieldCount = allSelectedProductId.length;
            var matchFound = false;
            var newProductObject;
            for (var index in $scope.productVariations) {
                var matchCount = 0;
                for (var index2 in allSelectedProductId) {
                    if ($scope.productVariations[index].sign.indexOf(allSelectedProductId[index2]) != -1) {
                        matchCount = matchCount + 1;
                    }
                }
                
                if(matchCount == selectedFieldCount) {
                    matchFound = true;
                    newProductObject = JSON.parse(JSON.stringify($scope.productVariations[index]));
                    break;
                }
            }

            if(matchFound) {   
                for (var key in newProductObject) {
                    if(key != 'sign' && key != 'images') {
                        $scope.detailObject[key] = newProductObject[key];
                    }
                }
            }
        }

        function setSelectedAttribute() {
            var tempSelectedArray = [];
            for (var index in productDetail.selected_option_ids) {
                tempSelectedArray.push(productDetail.options.find(function(optionObject) {
                    return optionObject._id == productDetail.selected_option_ids[index];
                }));
            }

            for (var index in tempSelectedArray) {
                for (var index2 in $scope.productAttributes) {
                    if ($scope.productAttributes[index2]._id == tempSelectedArray[index].attrib_id) {
                        $scope.productAttributes[index2]['selected'] = JSON.parse(JSON.stringify(tempSelectedArray[index]));
                    }
                }
            }
        }

        $scope.increementProduct = function() {
            $scope.productCount = $scope.productCount + 1;
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