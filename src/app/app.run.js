var app = angular.module('app');

app.run(function($rootScope) {





    // -----------------------------------
    // State Machine Events
    // -----------------------------------
    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams){

    });
    $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){

    });
    $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error){

    });
});
