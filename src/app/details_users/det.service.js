(function(){
    'use strict';

    DetService.$inject = ['$http'];
    function DetService ($http){
        this.getUserByID = getUserByID;

        /////////////////////////////////////

        function getUserByID(id){
            return $http({
                method: 'GET',
                url: 'https://jsonplaceholder.typicode.com/users',
                params: {
                    id: id
                }
            })
        }
    }

    angular
        .module('AppModule')
        .service('DetService',DetService);
})();