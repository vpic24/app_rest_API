(function() {
    'use strict';

    AppController.$inject = [];
    function AppController() {
        var vm = this;

        vm.pages = [
            {name: 'Home', route: 'home'},
            {name: 'Users', route: 'user'},
        ];
        

    }

    angular
        .module('AppModule')
        .controller('AppController', AppController);
})();