(function() {
    'use strict';

    HomeService.$inject = ['$http'];
    function HomeService($http) {
        /**
         * Dichiarazioni dei metodi
         */
        this.todos = todos;


        ////////////////////////////////

        /**
         * Implementazione dei metodi
         */
        function todos() {
            return $http({
                method: 'GET',
                url: 'https://jsonplaceholder.typicode.com/todos'
            })
        }


    }

    angular
        .module('AppModule')
        .service('HomeService', HomeService);
})();