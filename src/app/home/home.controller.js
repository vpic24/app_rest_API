(function() {
    'use strict';

    HomeController.$inject = ['$state', 'HomeService'];
    function HomeController($state, HomeService) {
        var vm = this;

        vm.todoList = [];
        vm.goToUserDetail = goToUserDetail;
        vm.$onInit = onInit;

        //////////////////////////////////////////////

        function onInit() {
            HomeService
                .todos()
                .then(function(resp) {
                    vm.todoList = resp.data;
                });
        }


        function goToUserDetail(id) {
            $state.go('post-detail', {userId: id}); // Path param
        }

        
    }

    // Registrazione
    angular
        .module('AppModule')
        .controller('HomeController', HomeController);
})();