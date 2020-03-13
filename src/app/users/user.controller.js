(function(){
'use strict';

UserController.$inject = ['$state', 'UserService'];
function UserController($state,UserService){
    var vm = this;

    vm.userList = [];
    vm.goToUserByID = goToUserByID;
    vm.$onInit = onInit;

        ///////////////////////////////////////////
        
        function onInit(){
            UserService
                .todos()
                .then(function(resp){
                    vm.userList = resp.data;
                });
         }

        function goToUserByID(idUser){
            $state.go('user-details', {id: idUser});
        }
}

//registrazione
angular
    .module('AppModule')
    .controller('UserController',UserController);
})();