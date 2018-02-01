semillero.controller('graduatedController', ['$scope', 'GraduatedService', function($scope, GraduatedService) {

    $scope.findAll = function() {
        var promise = GraduatedService.findAll();
        debugger;
        promise.then(function (data) {
            debugger;
            console.log(data);
        });

    }

    $scope.findAll();
}]);