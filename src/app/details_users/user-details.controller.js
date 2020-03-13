(function(){
    'use strict';

    UserDetailsController.$inject = ['$state', 'DetService'];
    function UserDetailsController($state,DetService){
        var vm = this;

        vm.id;
        vm.info = [];
        vm.$onInit = onInit;

        /////////////////////////////////////

        function onInit(){
            vm.id = $state.params.id;

            //recupero i dati relativi all' user dell'utente 
            //mediante id
            DetService
                .getUserByID(vm.id)
                .then(function(resp){
                    vm.info = resp.data;
                })
        }

    }

    angular
        .module('AppModule')
        .controller('UserDetailsController', UserDetailsController);
})();