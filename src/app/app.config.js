var app = angular.module('app', [
    'templates-app',
    'templates-common',
    'ui.router'
]);

app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
});
