var myApp = angular.module('myApp', []);
myApp.controller('SuDuoKuController', function ($scope) {
     
    $scope.CellClick = function (row, col){
      val =  $scope.board[row].column[col].value
        if (val < 9) {
        	$scope.board[row].column[col].value += 1; 
        }else{
            $scope.board[row].column[col].value = null;
        }
    }
    
    $scope.modThree = function (rowNumber) {
        return rowNumber % 3 === 0;
    };
    
    $scope.board = [{
        column: [{
            value: 5,
            locked: true
        }, {
            value: null,
            locked: false
        }, {
            value: null,
            locked: false
        }, {
            value: null,
            locked: false
        }, {
            value: null,
            locked: false
        }, {
            value: null,
            locked: false
        }, {
            value: null,
            locked: false
        }, {
            value: null,
            locked: false
        }, {
            value: null,
            locked: true
        }]
    }, {
        column: [{
            value: null,
            locked: false
        }, {
            value: null,
            locked: false
        }, {
            value: null,
            locked: false
        }, {
            value: null,
            locked: false
        }, {
            value: null,
            locked: false
        }, {
            value: null,
            locked: false
        }, {
            value: null,
            locked: false
        }, {
            value: null,
            locked: false
        }, {
            value: null,
            locked: true
        }]
    }, {
        column: [{
            value: null,
            locked: false
        }, {
            value: null,
            locked: false
        }, {
            value: null,
            locked: false
        }, {
            value: null,
            locked: false
        }, {
            value: null,
            locked: false
        }, {
            value: null,
            locked: false
        }, {
            value: null,
            locked: false
        }, {
            value: null,
            locked: false
        }, {
            value: null,
            locked: true
        }]
    }, {
        column: [{
            value: null,
            locked: false
        }, {
            value: null,
            locked: false
        }, {
            value: null,
            locked: false
        }, {
            value: null,
            locked: false
        }, {
            value: null,
            locked: false
        }, {
            value: null,
            locked: false
        }, {
            value: null,
            locked: false
        }, {
            value: null,
            locked: false
        }, {
            value: null,
            locked: true
        }]
    }, {
        column: [{
            value: null,
            locked: false
        }, {
            value: null,
            locked: false
        }, {
            value: null,
            locked: false
        }, {
            value: null,
            locked: false
        }, {
            value: null,
            locked: false
        }, {
            value: null,
            locked: false
        }, {
            value: null,
            locked: false
        }, {
            value: null,
            locked: false
        }, {
            value: 3,
            locked: true
        }]
    }, {
        column: [{
            value: null,
            locked: false
        }, {
            value: null,
            locked: false
        }, {
            value: null,
            locked: false
        }, {
            value: null,
            locked: false
        }, {
            value: null,
            locked: false
        }, {
            value: null,
            locked: false
        }, {
            value: null,
            locked: false
        }, {
            value: null,
            locked: false
        }, {
            value: null,
            locked: true
        }]
    }, {
        column: [{
            value: null,
            locked: false
        }, {
            value: null,
            locked: false
        }, {
            value: null,
            locked: false
        }, {
            value: null,
            locked: false
        }, {
            value: null,
            locked: false
        }, {
            value: null,
            locked: false
        }, {
            value: null,
            locked: false
        }, {
            value: null,
            locked: false
        }, {
            value: null,
            locked: true
        }]
    }, {
        column: [{
            value: null,
            locked: false
        }, {
            value: null,
            locked: false
        }, {
            value: null,
            locked: false
        }, {
            value: null,
            locked: false
        }, {
            value: null,
            locked: false
        }, {
            value: null,
            locked: false
        }, {
            value: null,
            locked: false
        }, {
            value: null,
            locked: false
        }, {
            value: null,
            locked: true
        }]
    }, {
        column: [{
            value: null,
            locked: false
        }, {
            value: null,
            locked: false
        }, {
            value: null,
            locked: false
        }, {
            value: null,
            locked: false
        }, {
            value: null,
            locked: false
        }, {
            value: null,
            locked: false
        }, {
            value: null,
            locked: false
        }, {
            value: null,
            locked: false
        }, {
            value: null,
            locked: true
        }]
    }];
});