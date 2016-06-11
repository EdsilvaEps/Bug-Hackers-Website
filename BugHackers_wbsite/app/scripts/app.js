'use strict';

/**
 * @ngdoc overview
 * @name bugHackersApp
 * @description
 * # bugHackersApp
 *
 * Main module of the application.
 */
angular.module('bugHackersApp', ['ui.router','ngResource'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
    
      //route for the home page
      .state('app', {
        url:'/',
        views: {
            'header':{
                templateUrl : 'views/header.html',
            },
            'content':{
                templateUrl : 'views/main.html',
                controller  : 'MainCtrl',
            },
            'footer': {
                templateUrl : 'views/footer.html',
            }
        }
     })
    
     //route for the about page
      .state('app.about', {
        url:'about',
        views: {
            '@content':{
                templateUrl : 'views/about.html',
                controller  : 'AboutCtrl',
            }
        }
     });
     
     $urlRouterProvider.otherwise('/');
    
  });
