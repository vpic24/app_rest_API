(function() {
    'use strict';

    angular
        .module('AppModule')
        .config(function($stateProvider, $urlRouterProvider){

            $stateProvider
                .state({
                    url: '/',
                    name: 'home', // ui-sref
                    templateUrl: 'src/app/home/home.page.html',
                    controller: 'HomeController',
                    controllerAs: 'home'
                })
                .state({
                    url: '/post-detail?userId',
                    name: 'post-detail',
                    templateUrl: 'src/app/posts/detail/post-details.page.html',
                    controller: 'PostDetailController as postDetail'
                })
                .state({
                    url: '/user',
                    name: 'user',
                    templateUrl: 'src/app/users/user.page.html',
                    controller: 'UserController as user'
                })
                .state( {
                    url: '/user-details?id',
                    name: 'user-details',
                    templateUrl: 'src/app/details_users/user-details.page.html',
                    controller: 'UserDetailsController as userDetails'
                });
                

            $urlRouterProvider.otherwise('/');

        })
})()