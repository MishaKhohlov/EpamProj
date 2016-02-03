//---------------------------------------Home-----------------------------------------
;(function() {
	"use strict";

	angular.module('ngApp', ['ui.router', 'ngHeader', 'ngCategoryAll',
         'ngDataAbout', 'ngBasket', 'ngOrderSend', 'ngData', 'ngDataFactory', 'ngAnimate', 'ngStorage'])
        .controller('mainCtrl', mainCtrl)
        .config(appConfig);
    function mainCtrl($scope, $log, dataFact) {
        $log.debug('main cntrl start');
            $scope.lookBook = dataFact.dataImage();
        $log.debug('main cntrl finish');
    }
    function appConfig($stateProvider, $urlRouterProvider, $locationProvider){
        $urlRouterProvider.otherwise('/home');
        // убирает решётку 
         // $locationProvider.html5Mode({
         // enabled: true,
         // requireBase: false
         // });

        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'home.html',
                controller: 'mainCtrl'
                });
            }
})();
//---------------------------------------factory-----------------------------------------
;(function() {
    "use strict";

    angular.module('ngDataFactory', [])
    .factory('dataFact', dataFact);

    function dataFact($log, $rootScope) {
        var data = [
            {male: 'men', type: 'coats', name: 'Double-Layered Top1', color: ['black', 'white'], price: 666.99, 
            size: [sizeСl(1), sizeСl(2), sizeСl(3), sizeСl(4)], desc: desc(), artnum: randInt(10000000000, 33333333333),
             photos: ['1200x600', '600x600', '550x700', '600x1200']},
             {male: 'men', type: 'coats', name: 'Double-Layered Top2', color: ['black', 'white'], price: 666.99, 
            size: [sizeСl(1), sizeСl(2), sizeСl(3), sizeСl(4)], desc: desc(), artnum: randInt(10000000000, 33333333333),
             photos: ['1200x600', '600x600', '550x700', '600x1200']},
             {male: 'men', type: 'coats', name: 'Double-Layered Top3', color: ['black', 'white'], price: 666.99, 
            size: [sizeСl(1), sizeСl(2), sizeСl(3), sizeСl(4)], desc: desc(), artnum: randInt(10000000000, 33333333333),
             photos: ['1200x600', '600x600', '550x700', '600x1200']},
             {male: 'men', type: 'coats', name: 'Double-Layered Top4', color: ['black', 'white'], price: 666.99, 
            size: [sizeСl(1), sizeСl(2), sizeСl(3), sizeСl(4)], desc: desc(), artnum: randInt(10000000000, 33333333333),
             photos: ['1200x600', '600x600', '550x700', '600x1200']},
             {male: 'men', type: 'outerwear', name: 'Double-Layered Top5', color: ['black', 'white'], price: 666.99, 
            size: [sizeСl(1), sizeСl(2), sizeСl(3), sizeСl(4)], desc: desc(), artnum: randInt(10000000000, 33333333333),
             photos: ['1200x600', '600x600', '550x700', '600x1200']},
             {male: 'men', type: 'outerwear', name: 'Double-Layered Top6', color: ['black', 'white'], price: 666.99, 
            size: [sizeСl(1), sizeСl(2), sizeСl(3), sizeСl(4)], desc: desc(), artnum: randInt(10000000000, 33333333333),
             photos: ['1200x600', '600x600', '550x700', '600x1200']},
             {male: 'men', type: 'outerwear', name: 'Double-Layered Top7', color: ['black', 'white'], price: 666.99, 
            size: [sizeСl(1), sizeСl(2), sizeСl(3), sizeСl(4)], desc: desc(), artnum: randInt(10000000000, 33333333333),
             photos: ['1200x600', '600x600', '550x700', '600x1200']},
             {male: 'men', type: 'outerwear', name: 'Double-Layered Top8', color: ['black', 'white'], price: 666.99, 
            size: [sizeСl(1), sizeСl(2), sizeСl(3), sizeСl(4)], desc: desc(), artnum: randInt(10000000000, 33333333333),
             photos: ['1200x600', '600x600', '550x700', '600x1200']},
              {male: 'men', type: 'tshirt', name: 'Double-Layered Top9', color: ['black', 'white'], price: 666.99, 
            size: [sizeСl(1), sizeСl(2), sizeСl(3), sizeСl(4)], desc: desc(), artnum: randInt(10000000000, 33333333333),
             photos: ['1200x600', '600x600', '550x700', '600x1200']},
             {male: 'men', type: 'tshirt', name: 'Double-Layered Top10', color: ['black', 'white'], price: 666.99, 
            size: [sizeСl(1), sizeСl(2), sizeСl(3), sizeСl(4)], desc: desc(), artnum: randInt(10000000000, 33333333333),
             photos: ['1200x600', '600x600', '550x700', '600x1200']},
             {male: 'men', type: 'tshirt', name: 'Double-Layered Top11', color: ['black', 'white'], price: 666.99, 
            size: [sizeСl(1), sizeСl(2), sizeСl(3), sizeСl(4)], desc: desc(), artnum: randInt(10000000000, 33333333333),
             photos: ['1200x600', '600x600', '550x700', '600x1200']},
             {male: 'men', type: 'tshirt', name: 'Double-Layered Top12', color: ['black', 'white'], price: 666.99, 
            size: [sizeСl(1), sizeСl(2), sizeСl(3), sizeСl(4)], desc: desc(), artnum: randInt(10000000000, 33333333333),
             photos: ['1200x600', '600x600', '550x700', '600x1200']},
             {male: 'women', type: 'coats', name: 'Double-Layered Top1', color: ['black', 'white'], price: 666.99, 
            size: [sizeСl(1), sizeСl(2), sizeСl(3), sizeСl(4)], desc: desc(), artnum: randInt(10000000000, 33333333333),
             photos: ['1200x600', '600x600', '550x700', '600x1200']},
             {male: 'women', type: 'coats', name: 'Double-Layered Top2', color: ['black', 'white'], price: 666.99, 
            size: [sizeСl(1), sizeСl(2), sizeСl(3), sizeСl(4)], desc: desc(), artnum: randInt(10000000000, 33333333333),
             photos: ['1200x600', '600x600', '550x700', '600x1200']},
             {male: 'women', type: 'coats', name: 'Double-Layered Top3', color: ['black', 'white'], price: 666.99, 
            size: [sizeСl(1), sizeСl(2), sizeСl(3), sizeСl(4)], desc: desc(), artnum: randInt(10000000000, 33333333333),
             photos: ['1200x600', '600x600', '550x700', '600x1200']},
             {male: 'women', type: 'coats', name: 'Double-Layered Top4', color: ['black', 'white'], price: 666.99, 
            size: [sizeСl(1), sizeСl(2), sizeСl(3), sizeСl(4)], desc: desc(), artnum: randInt(10000000000, 33333333333),
             photos: ['1200x600', '600x600', '550x700', '600x1200']},
             {male: 'women', type: 'outerwear', name: 'Double-Layered Top5', color: ['black', 'white'], price: 666.99, 
            size: [sizeСl(1), sizeСl(2), sizeСl(3), sizeСl(4)], desc: desc(), artnum: randInt(10000000000, 33333333333),
             photos: ['1200x600', '600x600', '550x700', '600x1200']},
             {male: 'women', type: 'outerwear', name: 'Double-Layered Top6', color: ['green', 'blue'], price: 666.99, 
            size: [sizeСl(1), sizeСl(2), sizeСl(3), sizeСl(4)], desc: desc(), artnum: randInt(10000000000, 33333333333),
             photos: ['1200x600', '600x600', '550x700', '600x1200']},
             {male: 'women', type: 'outerwear', name: 'Double-Layered Top7', color: ['green', 'blue'], price: 666.99, 
            size: [sizeСl(1), sizeСl(2), sizeСl(3), sizeСl(4)], desc: desc(), artnum: randInt(10000000000, 33333333333),
             photos: ['1200x600', '600x600', '550x700', '600x1200']},
             {male: 'women', type: 'outerwear', name: 'Double-Layered Top8', color: ['green', 'blue'], price: 666.99, 
            size: [sizeСl(1), sizeСl(2), sizeСl(3), sizeСl(4)], desc: desc(), artnum: randInt(10000000000, 33333333333),
             photos: ['1200x600', '600x600', '550x700', '600x1200']},
              {male: 'women', type: 'tshirt', name: 'Double-Layered Top9', color: ['green', 'blue'], price: 666.99, 
            size: [sizeСl(1), sizeСl(2), sizeСl(3), sizeСl(4)], desc: desc(), artnum: randInt(10000000000, 33333333333),
             photos: ['1200x600', '600x600', '550x700', '600x1200']},
             {male: 'women', type: 'tshirt', name: 'Double-Layered Top10', color: ['green', 'blue'], price: 666.99, 
            size: [sizeСl(1), sizeСl(2), sizeСl(3), sizeСl(4)], desc: desc(), artnum: randInt(10000000000, 33333333333),
             photos: ['1200x600', '600x600', '550x700', '600x1200']},
             {male: 'women', type: 'tshirt', name: 'Double-Layered Top11', color: ['green', 'blue'], price: 666.99, 
            size: [sizeСl(1), sizeСl(2), sizeСl(3), sizeСl(4)], desc: desc(), artnum: randInt(10000000000, 33333333333),
             photos: ['1200x600', '600x600', '550x700', '600x1200']},
             {male: 'women', type: 'tshirt', name: 'Double-Layered Top12', color: [], price: 666.99, 
            size: [sizeСl(1), sizeСl(2), sizeСl(3), sizeСl(4)], desc: desc(), artnum: randInt(10000000000, 33333333333),
             photos: ['1200x600', '600x600', '550x700', '600x1200']},
              {male: 'kids', type: 'coats', name: 'Double-Layered Top1', color: [], price: 666.99, 
            size: [sizeСl(1), sizeСl(2), sizeСl(3), sizeСl(4)], desc: desc(), artnum: randInt(10000000000, 33333333333),
             photos: ['1200x600', '600x600', '550x700', '600x1200']},
             {male: 'kids', type: 'coats', name: 'Double-Layered Top2', color: [], price: 666.99, 
            size: [sizeСl(1), sizeСl(2), sizeСl(3), sizeСl(4)], desc: desc(), artnum: randInt(10000000000, 33333333333),
             photos: ['1200x600', '600x600', '550x700', '600x1200']},
             {male: 'kids', type: 'coats', name: 'Double-Layered Top3', color: [], price: 666.99, 
            size: [sizeСl(1), sizeСl(2), sizeСl(3), sizeСl(4)], desc: desc(), artnum: randInt(10000000000, 33333333333),
             photos: ['1200x600', '600x600', '550x700', '600x1200']},
             {male: 'kids', type: 'coats', name: 'Double-Layered Top4', color: [], price: 666.99, 
            size: [sizeСl(1), sizeСl(2), sizeСl(3), sizeСl(4)], desc: desc(), artnum: randInt(10000000000, 33333333333),
             photos: ['1200x600', '600x600', '550x700', '600x1200']},
             {male: 'kids', type: 'outerwear', name: 'Double-Layered Top5', color: [], price: 666.99, 
            size: [sizeСl(1), sizeСl(2), sizeСl(3), sizeСl(4)], desc: desc(), artnum: randInt(10000000000, 33333333333),
             photos: ['1200x600', '600x600', '550x700', '600x1200']},
             {male: 'kids', type: 'outerwear', name: 'Double-Layered Top6', color: [], price: 666.99, 
            size: [sizeСl(1), sizeСl(2), sizeСl(3), sizeСl(4)], desc: desc(), artnum: randInt(10000000000, 33333333333),
             photos: ['1200x600', '600x600', '550x700', '600x1200']},
             {male: 'kids', type: 'outerwear', name: 'Double-Layered Top7', color: [], price: 666.99, 
            size: [sizeСl(1), sizeСl(2), sizeСl(3), sizeСl(4)], desc: desc(), artnum: randInt(10000000000, 33333333333),
             photos: ['1200x600', '600x600', '550x700', '600x1200']},
             {male: 'kids', type: 'outerwear', name: 'Double-Layered Top8', color: [], price: 666.99, 
            size: [sizeСl(1), sizeСl(2), sizeСl(3), sizeСl(4)], desc: desc(), artnum: randInt(10000000000, 33333333333),
             photos: ['1200x600', '600x600', '550x700', '600x1200']},
              {male: 'kids', type: 'tshirt', name: 'Double-Layered Top9', color: [], price: 666.99, 
            size: [sizeСl(1), sizeСl(2), sizeСl(3), sizeСl(4)], desc: desc(), artnum: randInt(10000000000, 33333333333),
             photos: ['1200x600', '600x600', '550x700', '600x1200']},
             {male: 'kids', type: 'tshirt', name: 'Double-Layered Top10', color: [], price: 666.99, 
            size: [sizeСl(1), sizeСl(2), sizeСl(3), sizeСl(4)], desc: desc(), artnum: randInt(10000000000, 33333333333),
             photos: ['1200x600', '600x600', '550x700', '600x1200']},
             {male: 'kids', type: 'tshirt', name: 'Double-Layered Top11', color: [], price: 666.99, 
            size: [sizeСl(1), sizeСl(2), sizeСl(3), sizeСl(4)], desc: desc(), artnum: randInt(10000000000, 33333333333),
             photos: ['1200x600', '600x600', '550x700', '600x1200']},
             {male: 'kids', type: 'tshirt', name: 'Double-Layered Top12', color: [], price: 666.99, 
            size: [sizeСl(1), sizeСl(2), sizeСl(3), sizeСl(4)], desc: desc(), artnum: randInt(10000000000, 33333333333),
             photos: ['1200x600', '600x600', '550x700', '600x1200']}
        ];
        var dataImage = ['200x121','200x122','200x123','200x124','200x125','200x126','200x127',
        '200x128','200x129','200x130','200x131'];

        var cash;
        var cashIndex = -1;
        var orderArr = [];
        function sizeСl(num) {
                switch (num) {
                  case 1:
                     return 's';
                  case 2:
                     return 'm';
                  case 3:
                     return 'x';
                  case 4:
                     return 'xl';
                }
        }
        function desc() {
            var text = "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.";
             return text;
        }
        function randInt(min, max) {
          var rand = min + Math.random() * (max - min);
          rand = Math.round(rand);
          return rand;
        }
        var publickObj = {
            data: function() {
                return data;
            }, 
            dataImage: function() {
                return dataImage;
            }, 
            dataParse: function(male, type) {
                var coats = []; 
                var outerwear = [];
                var tshirts = [];
                var all = [];
                angular.forEach(data, function(value, key) {
                     if(value.male == male) {
                        value.index = key;
                        if(value.type == 'coats') {
                            coats.push(value);
                        } else if(value.type == 'outerwear') {
                            outerwear.push(value);
                        } else {
                            tshirts.push(value);
                        }
                     }
                }); 
            if(type == 'all') {
                all.push(coats, outerwear, tshirts);
                return all;
            } else if (type == 'coats') {
                return coats;
            } else if (type == 'outerwear') {
                return outerwear;
            } else {
                return tshirts;
            }
        },
        dataThingAbout: function(index) {
            return data[index];
        },
        setItem: function(index) {
            if(cash == index) {
                ++orderArr[cashIndex].quantity;
            } else {
                 data[index].quantity = 1;
                 orderArr.push(data[index]);
                 ++cashIndex;
            }
            cash = index;
            publickObj.count();
            $log.log(orderArr);
        },
        count: function() {
             if(orderArr[[0]]) {
                $rootScope.count = orderArr.length;
            } else {
                $rootScope.count = 0;
            }
        },
        getOrder: function() {
           if(orderArr[[0]]) {
                return orderArr;
           } 
        }
    };
        return publickObj;
    }    
})();
//---------------------------------------Header-----------------------------------------
;(function() {
    "use strict";

    angular.module('ngHeader', [])
        .controller('headerCtrl', headerCtrl);

    function headerCtrl ($scope, $log, dataFact, $rootScope) {
        $log.debug("Headeer controller star");
            $rootScope.count = 0;          
            $scope.searchInp = function() {
                $log.log($scope.search);
            }


        $log.debug("Header controller finish");
    }
})();
//---------------------------------------ngCategoryAll-----------------------------------------
;(function() {
	"use strict";

	angular.module('ngCategoryAll', [])
        .config(categoryConf)
		.controller('categoryAllCtrl', categoryAllCtrl);

    function categoryAllCtrl ($scope, $log, $state, dataFact) {
    	$log.debug("categoryAllCtrl controller star");
            $scope.male = $state.params.male;
            var dataCatalog = dataFact.dataParse($scope.male, 'all');

            $scope.viewCoats = dataCatalog[0];
            $scope.viewOuterwear = dataCatalog[1];
            $scope.viewTshirt = dataCatalog[2];

              
    	$log.debug("categoryAllCtrl controller finish");
    }

    function categoryConf ($stateProvider){
        $stateProvider
            .state('catalog', {
                    url: '/home/:male',
                    templateUrl: 'categoryAll.html',
                    controller: 'categoryAllCtrl'
        
            });
        
    }
})();
//---------------------------------------ngData-----------------------------------------
;(function() {
    "use strict";

    angular.module('ngData', [])
        .config(dataConf)
        .controller('dataCtrl', dataCtrl);

    function dataCtrl ($scope, $log, $state, dataFact) {
        $log.debug("data controller star");
              $scope.clothes = $state.params.clothes;
              $scope.male = $state.params.male;

              $scope.viewWear = dataFact.dataParse( $scope.male, $scope.clothes);


        $log.debug("data controller finish");
    }

    function dataConf($stateProvider){
        $stateProvider
            .state('data', {
                url: '/home/:male/:clothes',
                templateUrl: 'data.html',
                controller: 'dataCtrl'
            });
    }
})();
//---------------------------------------ngDataAbout-----------------------------------------
;(function() {
    "use strict";

    angular.module('ngDataAbout', [])
        .config(aboutConf)
        .controller('aboutCtrl', aboutCtrl);

    function aboutCtrl ($scope, $log, $state, dataFact, $sessionStorage) {
        $log.debug("dataAbout controller star");
              $scope.clothes = $state.params.clothes;
              $scope.male = $state.params.male;
              $scope.id = $state.params.id;
              var lastObj = {clothes: $scope.clothes, male: $scope.male};
              $scope.things = dataFact.dataThingAbout($scope.id);

              $scope.buy = function() {
                    $sessionStorage.lastObj = lastObj;
                    dataFact.setItem($scope.id);
              };


        $log.debug("dataAbout controller finish");
    }

    function aboutConf($stateProvider){
        $stateProvider
            .state('dataAbout', {
                url: '/home/:male/:clothes/:id',
                templateUrl: 'data.about.html',
                controller: 'aboutCtrl'
            });
    }
})();
//---------------------------------------Basket-----------------------------------------
;(function() {
    "use strict";

    angular.module('ngBasket', [])
        .config(basketConf)
        .controller('basketCtrl', basketCtrl);

    function basketCtrl ($scope, $log, $state, dataFact, $sessionStorage) {
        $log.debug("basket controller star");
            $scope.list = dataFact.getOrder();

            if($sessionStorage.lastObj) {
                 $scope.clothes = $sessionStorage.lastObj.clothes;
                 $scope.male = $sessionStorage.lastObj.male;
            } else {
                $scope.male = 'women';
            }
            function start() {
                if($scope.list) {
                   $scope.basketEmpty = true; 
                   starBasket();
                } else {
                    delete $sessionStorage.lastObj;
                    $scope.basketEmpty = false; 
                }
            }
            start();
            function starBasket() {
                $scope.delete = function(key) {
                    $scope.list.splice(key, 1);
                    dataFact.count();
                    if(!$scope.list[0]){
                        $scope.list = null;
                        start();
                    }
                };
                $scope.quantity = function(arg, key) {
                    if(arg) {
                        ++$scope.list[key].quantity;
                    } else {
                        if($scope.list[key].quantity > 1) {
                        --$scope.list[key].quantity;
                        }
                    } 
                };
                $scope.color = function(colorArr) {
                    if(colorArr.length !== 0) {
                        return colorArr[0];
                    } else {
                        return 'One color';
                    }
                };
                $scope.subtotal = function() {
                     var res = 0;  
                     angular.forEach($scope.list, function(value, key) {
                        if(value.quantity == 1) {
                            res += value.price;
                        } else {
                            res += value.price*value.quantity;
                        }
                    }); 
                     return res;
                };
            }
        $log.debug("basket controller finish");
    }

    function basketConf($stateProvider){
        $stateProvider
            .state('basket', {
                url: '/basket',
                templateUrl: 'basket.html',
                controller: 'basketCtrl'
            });
    }
})();

//---------------------------------------Order-----------------------------------------
;(function() {
    "use strict";

    angular.module('ngOrderSend', [])
        .config(orderSendConf)
        .controller('orderSendCtrl', orderSendCtrl);

    function orderSendCtrl ($scope, $log) {
        $log.debug("orderSend controller star");


        $log.debug("orderSend controller finish");
    }

    function orderSendConf($stateProvider){
        $stateProvider
            .state('ordersend', {
                url: '/ordersend',
                templateUrl: 'orderSend.html',
                controller: 'orderSendCtrl'
            });
    }
})();