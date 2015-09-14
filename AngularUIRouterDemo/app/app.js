var myApp = angular.module('myApp', ['ui.router']);

myApp.config(function ($stateProvider,$urlRouterProvider) {

    $urlRouterProvider.when("", "/PageTab");

    $stateProvider.state("PageTab",
        {
            url: "/PageTab",
            templateUrl: "app/partials/PageTab.html" })

        .state("PageTab.Page1",
        { url: "/Page1", templateUrl: "app/partials/Page1.html" })

        . state("PageTab.Page2",
        { url: "/Page2", templateUrl: "app/partials/Page2.html" })

        .state("PageTab.Page3",
        { url: "/Page3", templateUrl: "app/partials/Page3.html" })

        .state("PageTab.clients",
        { url: "/clients", templateUrl: "app/partials/clients.html" })

        .state("PageTab.services",
        { url: "/services", templateUrl: "app/partials/services.html" })

        .state("PageTab.Page1.skills",
        {url:"/skills",templateUrl:'app/partials/skills.html'});




});