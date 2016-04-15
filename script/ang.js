
// var app = angular.module('myApp', []);

// app.controller('myCtrl', function($scope, JobsService) {
// $scope.display = function(){
//     JobsService
//         .then(success)
//         .catch(fail)
//     };
//     function success(data) {
//         $scope.list = data;
//     }
//     function fail(err) {
//         //todo...
//     }
// })


// var app = angular.module('myApp', []);
//     app.controller('myCtrl', function ($scope, $http){
//         // $scope.showMe = true;
//         $scope.display = function(){
//             // $scope.showMe = false;
//             $http.get('list.json').success(function(data) {
//                 $scope.list = data;
//         })
//     };
//     });


    var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $http) {
  $scope.display = function(){
  $http({
    method : "GET",
    url : "list.json"
        }).then(function mySucces(response) {
                $scope.list = response.data;
            }, function myError(response) {
                $scope.fail = "Something went wrong";
            });
    }
});
