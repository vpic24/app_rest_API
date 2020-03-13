(function() {
    'use strict';

    PostService.$inject = ['$http'];
    function PostService($http) {
        this.getPostsByUserID = getPostsByUserID;

        //////////////////////////////////////////////////

        function getPostsByUserID(userId) {
            return $http({
                method: 'GET', 
                url: 'https://jsonplaceholder.typicode.com/posts',
                params: {
                    userId: userId
                }
            })
        }

    }


    angular
        .module('AppModule')
        .service('PostService', PostService);
})();