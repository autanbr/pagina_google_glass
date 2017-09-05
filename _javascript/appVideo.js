var app = angular.module('plunker', []);

app.controller('MainCtrl', function($scope) {

});


app.filter('trustUrl', function($sce) {
  return function(url) {
    return $sce.trustAsResourceUrl(url);
  };
});

app.directive('videohelp', function() {
  return {
    restrict: 'AE',
    scope: {
      header: '@',
      video: '@'
    },
    transclude: true,
    replace: true,
    template: '<iframe ng-src="{{video | trustUrl}}" frameborder="0" allowfullscreen></iframe>',
    link: function(scope, element, attrs) {
      scope.header = attrs.header;
      //'<iframe style="width: 100% !important; height: 50% !important;" ng-src="{{video | trustUrl}}" width="100%" height="100%" frameborder="0" allowfullscreen></iframe>'
    }
  };
});



app.directive('pdfHelp', function() {
  return {
    restrict: 'AE',
    scope: {
    header: '@',
    pdf: '@'
    },
    transclude: true,
    replace: true,
    template: '<div class="well"><iframe style="width: 100% !important; height: 100% !important;" ng-src="{{pdf | trustUrl}}" width="100%" height="100%" frameborder="0" allowfullscreen></iframe></div>',
    link: function(scope, element, attrs) {
      scope.header = attrs.header;
    }
  };
});
