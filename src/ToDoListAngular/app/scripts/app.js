//
// Use the following code for running without authentication.
//
//'use strict';
//angular.module('todoApp', ['ngRoute'])
//.config(['$routeProvider', '$httpProvider', function ($routeProvider, $httpProvider) {
//    $routeProvider.when("/Home", {
//        controller: "homeCtrl",
//        templateUrl: "/App/Views/Home.html",
//    }).when("/TodoList", {
//        controller: "todoListCtrl",
//        templateUrl: "/App/Views/TodoList.html",
//    }).when("/UserData", {
//        controller: "userDataCtrl",
//        templateUrl: "/App/Views/UserData.html",
//    }).otherwise({ redirectTo: "/Home" });
//}]);


//
// Use the following code for running with authentication.
//
'use strict';
angular.module('todoApp', ['ngRoute', 'AdalAngular'])
.config(['$routeProvider', '$httpProvider', 'adalAuthenticationServiceProvider', function ($routeProvider, $httpProvider, adalProvider) {

    $routeProvider.when("/Home", {
        controller: "homeCtrl",
        templateUrl: "/App/Views/Home.html",
    }).when("/TodoList", {
        controller: "todoListCtrl",
        templateUrl: "/App/Views/TodoList.html",
        requireADLogin: true,
    }).when("/UserData", {
        controller: "userDataCtrl",
        templateUrl: "/App/Views/UserData.html",
    }).otherwise({ redirectTo: "/Home" });

    var endpoints = {
        "https://todolistapi-mc.azurewebsites.net/": "0d67d801-98da-4c6d-8e82-d6bf8196b03b"
    };

    adalProvider.init(
        {
            instance: 'https://login.microsoftonline.com/',
            tenant: 'mcowenmsdn.onmicrosoft.com',
            clientId: '0b1b01eb-4237-438f-ba8e-ca304ca74355',
            extraQueryParameter: 'nux=1',
            endpoints: endpoints
            //cacheLocation: 'localStorage', // enable this for IE, as sessionStorage does not work for localhost.
        },
        $httpProvider
        );

}]);

