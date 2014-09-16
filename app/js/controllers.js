'use strict';

/* Controllers */

var phonecatApp = angular.module('phonecatApp', []);

phonecatApp.controller('PhoneListCtrl', function($scope) {
  $scope.phones = [
    {'name': 'Blue Jeans',
     'snippet': 'Not in style. Uncomfortable'},
    {'name': 'Slacks',
     'snippet': 'For the classy man.'},
    {'name': 'Carharts',
     'snippet': 'For the working man.'},
      {'name': 'Shorts',
          'snippet': 'Only for golf.'},
      {'name': 'Skinny Jeans',
          'snippet': 'For the weirdest men.'}
  ];
});
