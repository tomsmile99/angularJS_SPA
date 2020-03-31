var app = angular.module('app', ['ui.router'])

app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('')
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'app/home/home.html'
        })
        .state('about', {
            url: '/about',
            templateUrl: 'app/about/about.html'
        })
        .state('post', {
            url: '/post',
            templateUrl: 'app/post/post.html'
        })
        .state('contact', {
            url: '/contact',
            templateUrl: 'app/content/contact.html',
            controller: 'contactCtrl'
        })
})