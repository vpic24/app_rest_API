(function(){
    'use strict';

    UserService.$inject = ['$http'];
    function UserService($http){
        /**
         * *Dichiarazione dei metodi
         */
        this.todos = todos;

        
        /////////////////////////
        
        /**
         * implementazione dei metodi
         */
        function todos(){
            return $http({
                method: 'GET',
                url: 'https://jsonplaceholder.typicode.com/users'
            })
        }
    }

    angular
        .module('AppModule')
        .service('UserService',UserService);
})();