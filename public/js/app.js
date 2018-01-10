var app = angular.module('shoppingApp',['ngRoute']);

app.component('header',{
    templateUrl: 'header.html'
});

app.config(function($routeProvider,$locationProvider){
    $locationProvider.hashPrefix('!');
    $routeProvider.when('/',{
        templateUrl: 'home.html'
    });
});

app.controller('signupController',function($scope){
    // $scope.email = '';
    // $scope.password = '';
    // $scope.mobileno = '';
});