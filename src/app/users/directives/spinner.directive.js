(function(){
    'use strict';

    function Spinner(){

    return{
        link: Spinner,
        templateUrl: 'src/app/users/directives/spinner.directive.html',
        restrict: 'A'
    };
}

    angular
        .module('AppModule')
        .directive('spinner', Spinner);

})();