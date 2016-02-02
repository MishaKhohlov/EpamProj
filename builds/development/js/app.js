//---------------------------------------Home-----------------------------------------
;(function() {
	"use strict";

	angular.module('ngApp', ['ui.router', 'ngHeader', 'ngCategoryAll',
         'ngDataAbout', 'ngBasket', 'ngOrderSend', 'ngData', 'ngDataFactory', 'ngAnimate', 'ngResource'])
        .config(appConfig);

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
                templateUrl: 'home.html'
                });
            }
})();
//---------------------------------------factory-----------------------------------------
;(function() {
    "use strict";

    angular.module('ngDataFactory', [])
    .factory('dataFact', dataFact);

    function dataFact($log) {
        var data = [
            {male: 'men', type: 'coats', name: 'Double-Layered Top1', price: 666.99, 
            size: [sizeСl(1), sizeСl(2), sizeСl(3), sizeСl(4)], desc: desc(), artnum: randInt(10000000000, 33333333333),
             photos: ['1200x600', '600x600', '550x700', '600x1200']},
             {male: 'men', type: 'coats', name: 'Double-Layered Top2', price: 666.99, 
            size: [sizeСl(1), sizeСl(2), sizeСl(3), sizeСl(4)], desc: desc(), artnum: randInt(10000000000, 33333333333),
             photos: ['1200x600', '600x600', '550x700', '600x1200']},
             {male: 'men', type: 'coats', name: 'Double-Layered Top3', price: 666.99, 
            size: [sizeСl(1), sizeСl(2), sizeСl(3), sizeСl(4)], desc: desc(), artnum: randInt(10000000000, 33333333333),
             photos: ['1200x600', '600x600', '550x700', '600x1200']},
             {male: 'men', type: 'coats', name: 'Double-Layered Top4', price: 666.99, 
            size: [sizeСl(1), sizeСl(2), sizeСl(3), sizeСl(4)], desc: desc(), artnum: randInt(10000000000, 33333333333),
             photos: ['1200x600', '600x600', '550x700', '600x1200']},
             {male: 'men', type: 'outerwear', name: 'Double-Layered Top5', price: 666.99, 
            size: [sizeСl(1), sizeСl(2), sizeСl(3), sizeСl(4)], desc: desc(), artnum: randInt(10000000000, 33333333333),
             photos: ['1200x600', '600x600', '550x700', '600x1200']},
             {male: 'men', type: 'outerwear', name: 'Double-Layered Top6', price: 666.99, 
            size: [sizeСl(1), sizeСl(2), sizeСl(3), sizeСl(4)], desc: desc(), artnum: randInt(10000000000, 33333333333),
             photos: ['1200x600', '600x600', '550x700', '600x1200']},
             {male: 'men', type: 'outerwear', name: 'Double-Layered Top7', price: 666.99, 
            size: [sizeСl(1), sizeСl(2), sizeСl(3), sizeСl(4)], desc: desc(), artnum: randInt(10000000000, 33333333333),
             photos: ['1200x600', '600x600', '550x700', '600x1200']},
             {male: 'men', type: 'outerwear', name: 'Double-Layered Top8', price: 666.99, 
            size: [sizeСl(1), sizeСl(2), sizeСl(3), sizeСl(4)], desc: desc(), artnum: randInt(10000000000, 33333333333),
             photos: ['1200x600', '600x600', '550x700', '600x1200']},
              {male: 'men', type: 'tshirt', name: 'Double-Layered Top9', price: 666.99, 
            size: [sizeСl(1), sizeСl(2), sizeСl(3), sizeСl(4)], desc: desc(), artnum: randInt(10000000000, 33333333333),
             photos: ['1200x600', '600x600', '550x700', '600x1200']},
             {male: 'men', type: 'tshirt', name: 'Double-Layered Top10', price: 666.99, 
            size: [sizeСl(1), sizeСl(2), sizeСl(3), sizeСl(4)], desc: desc(), artnum: randInt(10000000000, 33333333333),
             photos: ['1200x600', '600x600', '550x700', '600x1200']},
             {male: 'men', type: 'tshirt', name: 'Double-Layered Top11', price: 666.99, 
            size: [sizeСl(1), sizeСl(2), sizeСl(3), sizeСl(4)], desc: desc(), artnum: randInt(10000000000, 33333333333),
             photos: ['1200x600', '600x600', '550x700', '600x1200']},
             {male: 'men', type: 'tshirt', name: 'Double-Layered Top12', price: 666.99, 
            size: [sizeСl(1), sizeСl(2), sizeСl(3), sizeСl(4)], desc: desc(), artnum: randInt(10000000000, 33333333333),
             photos: ['1200x600', '600x600', '550x700', '600x1200']},
             {male: 'women', type: 'coats', name: 'Double-Layered Top1', price: 666.99, 
            size: [sizeСl(1), sizeСl(2), sizeСl(3), sizeСl(4)], desc: desc(), artnum: randInt(10000000000, 33333333333),
             photos: ['1200x600', '600x600', '550x700', '600x1200']},
             {male: 'women', type: 'coats', name: 'Double-Layered Top2', price: 666.99, 
            size: [sizeСl(1), sizeСl(2), sizeСl(3), sizeСl(4)], desc: desc(), artnum: randInt(10000000000, 33333333333),
             photos: ['1200x600', '600x600', '550x700', '600x1200']},
             {male: 'women', type: 'coats', name: 'Double-Layered Top3', price: 666.99, 
            size: [sizeСl(1), sizeСl(2), sizeСl(3), sizeСl(4)], desc: desc(), artnum: randInt(10000000000, 33333333333),
             photos: ['1200x600', '600x600', '550x700', '600x1200']},
             {male: 'women', type: 'coats', name: 'Double-Layered Top4', price: 666.99, 
            size: [sizeСl(1), sizeСl(2), sizeСl(3), sizeСl(4)], desc: desc(), artnum: randInt(10000000000, 33333333333),
             photos: ['1200x600', '600x600', '550x700', '600x1200']},
             {male: 'women', type: 'outerwear', name: 'Double-Layered Top5', price: 666.99, 
            size: [sizeСl(1), sizeСl(2), sizeСl(3), sizeСl(4)], desc: desc(), artnum: randInt(10000000000, 33333333333),
             photos: ['1200x600', '600x600', '550x700', '600x1200']},
             {male: 'women', type: 'outerwear', name: 'Double-Layered Top6', price: 666.99, 
            size: [sizeСl(1), sizeСl(2), sizeСl(3), sizeСl(4)], desc: desc(), artnum: randInt(10000000000, 33333333333),
             photos: ['1200x600', '600x600', '550x700', '600x1200']},
             {male: 'women', type: 'outerwear', name: 'Double-Layered Top7', price: 666.99, 
            size: [sizeСl(1), sizeСl(2), sizeСl(3), sizeСl(4)], desc: desc(), artnum: randInt(10000000000, 33333333333),
             photos: ['1200x600', '600x600', '550x700', '600x1200']},
             {male: 'women', type: 'outerwear', name: 'Double-Layered Top8', price: 666.99, 
            size: [sizeСl(1), sizeСl(2), sizeСl(3), sizeСl(4)], desc: desc(), artnum: randInt(10000000000, 33333333333),
             photos: ['1200x600', '600x600', '550x700', '600x1200']},
              {male: 'women', type: 'tshirt', name: 'Double-Layered Top9', price: 666.99, 
            size: [sizeСl(1), sizeСl(2), sizeСl(3), sizeСl(4)], desc: desc(), artnum: randInt(10000000000, 33333333333),
             photos: ['1200x600', '600x600', '550x700', '600x1200']},
             {male: 'women', type: 'tshirt', name: 'Double-Layered Top10', price: 666.99, 
            size: [sizeСl(1), sizeСl(2), sizeСl(3), sizeСl(4)], desc: desc(), artnum: randInt(10000000000, 33333333333),
             photos: ['1200x600', '600x600', '550x700', '600x1200']},
             {male: 'women', type: 'tshirt', name: 'Double-Layered Top11', price: 666.99, 
            size: [sizeСl(1), sizeСl(2), sizeСl(3), sizeСl(4)], desc: desc(), artnum: randInt(10000000000, 33333333333),
             photos: ['1200x600', '600x600', '550x700', '600x1200']},
             {male: 'women', type: 'tshirt', name: 'Double-Layered Top12', price: 666.99, 
            size: [sizeСl(1), sizeСl(2), sizeСl(3), sizeСl(4)], desc: desc(), artnum: randInt(10000000000, 33333333333),
             photos: ['1200x600', '600x600', '550x700', '600x1200']},
              {male: 'kids', type: 'coats', name: 'Double-Layered Top1', price: 666.99, 
            size: [sizeСl(1), sizeСl(2), sizeСl(3), sizeСl(4)], desc: desc(), artnum: randInt(10000000000, 33333333333),
             photos: ['1200x600', '600x600', '550x700', '600x1200']},
             {male: 'kids', type: 'coats', name: 'Double-Layered Top2', price: 666.99, 
            size: [sizeСl(1), sizeСl(2), sizeСl(3), sizeСl(4)], desc: desc(), artnum: randInt(10000000000, 33333333333),
             photos: ['1200x600', '600x600', '550x700', '600x1200']},
             {male: 'kids', type: 'coats', name: 'Double-Layered Top3', price: 666.99, 
            size: [sizeСl(1), sizeСl(2), sizeСl(3), sizeСl(4)], desc: desc(), artnum: randInt(10000000000, 33333333333),
             photos: ['1200x600', '600x600', '550x700', '600x1200']},
             {male: 'kids', type: 'coats', name: 'Double-Layered Top4', price: 666.99, 
            size: [sizeСl(1), sizeСl(2), sizeСl(3), sizeСl(4)], desc: desc(), artnum: randInt(10000000000, 33333333333),
             photos: ['1200x600', '600x600', '550x700', '600x1200']},
             {male: 'kids', type: 'outerwear', name: 'Double-Layered Top5', price: 666.99, 
            size: [sizeСl(1), sizeСl(2), sizeСl(3), sizeСl(4)], desc: desc(), artnum: randInt(10000000000, 33333333333),
             photos: ['1200x600', '600x600', '550x700', '600x1200']},
             {male: 'kids', type: 'outerwear', name: 'Double-Layered Top6', price: 666.99, 
            size: [sizeСl(1), sizeСl(2), sizeСl(3), sizeСl(4)], desc: desc(), artnum: randInt(10000000000, 33333333333),
             photos: ['1200x600', '600x600', '550x700', '600x1200']},
             {male: 'kids', type: 'outerwear', name: 'Double-Layered Top7', price: 666.99, 
            size: [sizeСl(1), sizeСl(2), sizeСl(3), sizeСl(4)], desc: desc(), artnum: randInt(10000000000, 33333333333),
             photos: ['1200x600', '600x600', '550x700', '600x1200']},
             {male: 'kids', type: 'outerwear', name: 'Double-Layered Top8', price: 666.99, 
            size: [sizeСl(1), sizeСl(2), sizeСl(3), sizeСl(4)], desc: desc(), artnum: randInt(10000000000, 33333333333),
             photos: ['1200x600', '600x600', '550x700', '600x1200']},
              {male: 'kids', type: 'tshirt', name: 'Double-Layered Top9', price: 666.99, 
            size: [sizeСl(1), sizeСl(2), sizeСl(3), sizeСl(4)], desc: desc(), artnum: randInt(10000000000, 33333333333),
             photos: ['1200x600', '600x600', '550x700', '600x1200']},
             {male: 'kids', type: 'tshirt', name: 'Double-Layered Top10', price: 666.99, 
            size: [sizeСl(1), sizeСl(2), sizeСl(3), sizeСl(4)], desc: desc(), artnum: randInt(10000000000, 33333333333),
             photos: ['1200x600', '600x600', '550x700', '600x1200']},
             {male: 'kids', type: 'tshirt', name: 'Double-Layered Top11', price: 666.99, 
            size: [sizeСl(1), sizeСl(2), sizeСl(3), sizeСl(4)], desc: desc(), artnum: randInt(10000000000, 33333333333),
             photos: ['1200x600', '600x600', '550x700', '600x1200']},
             {male: 'kids', type: 'tshirt', name: 'Double-Layered Top12', price: 666.99, 
            size: [sizeСl(1), sizeСl(2), sizeСl(3), sizeСl(4)], desc: desc(), artnum: randInt(10000000000, 33333333333),
             photos: ['1200x600', '600x600', '550x700', '600x1200']}
        ];
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
            if(orderArr[index]) {
                ++orderArr[index].quantity;
            } else {
                 data[index].quantity = 1;
                 orderArr.push(data[index]);
            }
            $log.log(orderArr);
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

    function headerCtrl ($scope, $log, dataFact) {
        $log.debug("Headeer controller star");
          //  $log.log(dataFact.data());
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
                url: '/:male/:clothes',
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

    function aboutCtrl ($scope, $log, $state, dataFact) {
        $log.debug("dataAbout controller star");
              $scope.clothes = $state.params.clothes;
              $scope.male = $state.params.male;
              $scope.id = $state.params.id;
              $scope.things = dataFact.dataThingAbout($scope.id);

              $scope.buy = function() {
                    dataFact.setItem($scope.id);
              };


        $log.debug("dataAbout controller finish");
    }

    function aboutConf($stateProvider){
        $stateProvider
            .state('dataAbout', {
                url: '/:male/:clothes/:id',
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

    function basketCtrl ($scope, $log, $state) {
        $log.debug("basket controller star");
               
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