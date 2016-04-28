angular.module('sjm', [])
.controller('Controller', ['$scope', function($scope) {
  $scope.customer = {
    name: 'Naomi',
    address: '1600 Amphitheatre'
  };
}])
.directive('sjm-audio-element', function() {
  return {
    restrict: 'A',
    template: 'Name: {{customer.name}} Address: {{customer.address}}'
  };
})
.directive('sjm-audio', function() {
  return {
    restrict: 'A',
    templateUrl: function(elem, attributes){
      var from = attributes.from;
      var to = attributes.to;
    }
  };
});
