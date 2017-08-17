'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    'ngAnimate',
    'ngAria',
    'ui.router',
    'SalaAppesiRouter',
    'ngProgress',
    'pascalprecht.translate',
    'uiGmapgoogle-maps',
    'myApp.version'
]).config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/home");

});

/* Translation provider configuration */
angular.module('myApp').config(['$translateProvider', function ($translateProvider) {
    $translateProvider.useStaticFilesLoader({
        prefix: 'languages/',
        //prefix: AppRegistryService.getRegistryParam('host_url') + ':' + AppRegistryService.getRegistryParam('port') + '/languages/',
        suffix: '.json'
    });
    $translateProvider.preferredLanguage('ita');
}]);

angular.module('myApp').config(function(uiGmapGoogleMapApiProvider) {
    uiGmapGoogleMapApiProvider.configure({
        key: 'AIzaSyCJPD5q3KaPqDOHDBq6727XqbGaLjulUhk',
        v: '3', //defaults to latest 3.X anyhow
        libraries: 'weather,geometry,visualization'
    });
});

angular.module('myApp').run(function ($rootScope, $state, $stateParams, $timeout, ngProgressFactory) {
    $rootScope.progressbar = ngProgressFactory.createInstance();
    $rootScope.progressbar.setParent(document.getElementById('loading-progress-anchor'));
    $rootScope.progressbar.setColor("#B71C1C");
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
    $state.transitionTo('Home');

    $rootScope.go = function (state) {
        $rootScope.startBar();
        $timeout(function () {
            $state.go(state);
        }, 1200).then(function(){
            $rootScope.completeBar();
        });
    };

    $rootScope.startBar = function () {
        $rootScope.progressbar.start();
    };

    $rootScope.setBar = function (val) {
        $rootScope.progressbar.set(val);
    };

    $rootScope.completeBar = function () {
        $rootScope.progressbar.complete();
    };

    $rootScope.stopBar = function () {
        $rootScope.progressbar.stop();
    };


});