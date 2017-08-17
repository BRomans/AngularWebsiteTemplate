/**
 * Created by Michele Romani
 */
'use strict';
angular.module('SalaAppesiRouter', ['ngRoute']).config(['$stateProvider', function ($stateProvider) {

    var home = {
        name: 'Homepage',
        url: '/home',
        templateUrl: 'views/home/home.html',
        controller: 'HomeCtrl'
    };
    var news = {
        name: 'News',
        url: '/news',
        templateUrl: 'views/news/news.html',
        controller: 'NewsCtrl'
    };
    var about = {
        name: 'About',
        url: '/about',
        templateUrl: 'views/about/about.html',
        controller: 'AboutCtrl'
    };


    $stateProvider
        .state(home)
        .state(news)
        .state(about)
}]);