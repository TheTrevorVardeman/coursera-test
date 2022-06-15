(function () {
    'use strict';

    angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope', '$filter'];
    function LunchCheckController($scope, $filter){

        $scope.checkamountAte = function(){
            var words = ($scope.textbox.split(',').length);

            if(typeof $scope.textbox === 'undefined' || $scope.textbox.length === 0){
                $scope.message = " ";
            }
            
            if(words <=3){
                $scope.message = "Enjoy!";
            }
            else{
                $scope.message = "Too much!";
            }
        }
    }
}());