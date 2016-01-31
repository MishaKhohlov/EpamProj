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
            $log.log(dataFact.data());
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
            var male = $state.params.male;
            $log.log(male);
            var dataCatalog = dataFact.data();
            $scope.viewCoats = [];

            angular.forEach(dataCatalog, function(value, key) {
                 if(value.male == male) {
                    $log.log(value);
                 }
            });   


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

    function dataCtrl ($scope, $log, $state) {
        $log.debug("data controller star");
              var id = $state.params.id;
              console.log(id);

        $log.debug("data controller finish");
    }

    function dataConf($stateProvider){
        $stateProvider
            .state('data', {
                url: '/catalog/:id',
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

    function aboutCtrl ($scope, $log, $state) {
        $log.debug("dataAbout controller star");
              var id = $state.params.id;
              console.log($state.params.section);
              console.log(id);

        $log.debug("dataAbout controller finish");
    }

    function aboutConf($stateProvider){
        $stateProvider
            .state('dataAbout', {
                url: '/catalog/:section/:id',
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