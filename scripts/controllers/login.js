'use strict';

angular.module('frontendApp')
  .controller('LoginCtrl', function ($scope, $location, $log) {

    $scope.login = function(username, password) {
      $log.log("login");
      if ( (username == "Bontor Humala") && (password == "08042014") ) {
          $log.log("login correct");
          $location.url("/dashboard");
      }
      else {
          $log.log("login incorrect, user " + username + " password " + password);
      }
    }

  });
