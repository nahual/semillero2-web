angular.module('semillero').factory('GraduatedService', function ($http, $q) {
    var serviceUrl = "https://semillero-nahual.herokuapp.com/node";
    return {
        findAll: function () {
            var deferred = $q.defer();
            $http.get(serviceUrl).
            success(
                function (data) {
                    deferred.resolve(data);
                }).
            error(function (data, status, headers, config) {
                deferred.reject(data);
            });

            return deferred.promise;
        }
    };
});