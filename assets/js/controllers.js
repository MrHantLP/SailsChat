/**
 * Created by MrHant on 13.10.2015.
 */
define(function(require){
  var angular = require('angular'),
    Controllers = angular.module('controllers', []);
  Controllers.controller('TodoCtrl', require('controllers/TodoCtrl'));
  return Controllers;
})
