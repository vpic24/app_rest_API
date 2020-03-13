(function() {
    'use strict';

    PostDetailController.$inject = ['$state', 'PostService'];
    function PostDetailController($state, PostService) {
        var vm = this;

        vm.userId;
        vm.posts = [];
        vm.$onInit = onInit;

        ///////////////////////////////////////////

        function onInit() {
            vm.userId = $state.params.userId;

            // Recuperiamo i post relativi l'utente scelto in home
            // mediante userId
            PostService
                .getPostsByUserID(vm.userId)
                .then(function(resp) {
                    vm.posts = resp.data;
                })
            
        }

    }


    angular
        .module('AppModule')
        .controller('PostDetailController', PostDetailController);
})();