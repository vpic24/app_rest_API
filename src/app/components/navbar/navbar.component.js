(function() {
    'use strict';

    // Definizione
    var NavbarComponent = {
        templateUrl: 'src/app/components/navbar/navbar.component.html',
        controller: 'NavbarController',
        bindings: {
            'pages': '<'
        }
    };

    // Registrazione
    // La prima lettera del nome del componente deve essere sempre minuscola
    angular
        .module('AppModule')
        .component('navbarComponent', NavbarComponent);       
})();