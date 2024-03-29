(function() {
    'use strict';

    angular
        .module('app.examples.ui')
        .config(moduleConfig);

    /* @ngInject */
    function moduleConfig($translatePartialLoaderProvider, $stateProvider) {
        $translatePartialLoaderProvider.addPart('app/examples/ui');

        $stateProvider
        .state('triangular.admin-default.ui-typography', {
            url: '/ui/typography',
            controller: 'TypographyController',
            controllerAs: 'vm',
            templateUrl: 'app/examples/ui/typography.tmpl.html'
        })
        .state('triangular.admin-default.ui-colors', {
            url: '/ui/colors',
            controller: 'ColorsController',
            controllerAs: 'vm',
            templateUrl: 'app/examples/ui/colors.tmpl.html'
        })
        .state('triangular.admin-default.ui-material-icons', {
            url: '/ui/material-icons',
            controller: 'MaterialIconsController',
            controllerAs: 'vm',
            templateUrl: 'app/examples/ui/material-icons.tmpl.html',
            resolve: {
                icons: function($http, API_CONFIG) {
                    return $http({
                        method: 'GET',
                        url: API_CONFIG.url + 'elements/icons'
                    });
                }
            }
        })
        .state('triangular.admin-default.ui-weather-icons', {
            url: '/ui/weather-icons',
            controller: 'WeatherIconsController',
            controllerAs: 'vm',
            templateUrl: 'app/examples/ui/weather-icons.tmpl.html'
        })
        .state('triangular.admin-default.ui-fa-icons', {
            url: '/ui/fa-icons',
            controller: 'FaIconsController',
            controllerAs: 'vm',
            templateUrl: 'app/examples/ui/fa-icons.tmpl.html',
            resolve: {
                icons: function($http, API_CONFIG) {
                    return $http({
                        method: 'GET',
                        url: API_CONFIG.url + 'elements/icons-fa'
                    });
                }
            }
        })

        .state('triangular.admin-default.ui-toolbar', {
            url: '/ui/toolbars/:extraClass/:background/:shrink',
            controller: 'ToolbarsUIController',
            controllerAs: 'vm',
            templateUrl: 'app/examples/ui/toolbars.tmpl.html'
        })

        .state('triangular.admin-default.ui-skins', {
            url: '/ui/skins',
            controller: 'SkinsUIController',
            controllerAs: 'vm',
            templateUrl: 'app/examples/ui/skins.tmpl.html'
        });

    }
})();