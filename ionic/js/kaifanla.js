
var app = angular.module('kfl',['ionic']);

//����״̬
  app.config(function ($stateProvider,$urlRouterProvider) {
    $stateProvider
      .state('start',{
        url:'/myStart',
        templateUrl:'tpl/start.html'
      })
      .state('main',{
        url:'/myMain',
        templateUrl:'tpl/main.html'
      })
      .state('detail',{
        url:'/myDetail',
        templateUrl:'tpl/detail.html'
      })
      .state('order',{
        url:'/myOrder',
        templateUrl:'tpl/order.html'
      })
      .state('personOrder',{
        url:'/personOrder',
        templateUrl:'tpl/myOrder.html'
      })
    $urlRouterProvider.otherwise('myStart');
  })

  app.controller('parentCtrl',
    ['$scope','$state',function($scope,$state){
      $scope.jump = function (state) {
        $state.go(state);
      }
    }])

