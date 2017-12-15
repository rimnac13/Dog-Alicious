var app = angular.module("dogaliciousApp", ["ngRoute"]);

app.config(function($routeProvider) {
  $routeProvider
  .when("/", {
    templateUrl: "/partials/home.html"
  })
  .when("/clients", {
    templateUrl: "/partials/clients.html"
  })
  .when("/employment", {
    templateUrl: "/partials/employment.html"
  })
  .when("/faq", {
    templateUrl: "/partials/faq.html"
  })
  .when("/services", {
    templateUrl: "/partials/services.html"
  })
  .when("/team", {
    templateUrl: "/partials/team.html"
  })
  .otherwise("/")
})
