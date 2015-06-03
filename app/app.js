(function() {

    var app = angular.module('calendarApp', ['ngRoute']);

    app.config(function($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'CalendarController',
                templateUrl: 'app/views/calendar.html'
            })
            .otherwise( { redirectTo: '/' } );
    });
}());
