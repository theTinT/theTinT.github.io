var myApp = angular.module('myApp', ['firebase']);
myApp.controller('SuDuoKuController', function ($scope, $firebase) {

    var dataRef = new Firebase('https://sudoku1v1.firebaseio.com/tristan');
    var fb = $firebase(dataRef);
    var syncObj = fb.$asObject();

    syncObj.$bindTo($scope,'$scope.board');

    $scope.CellClick = function (outer, inner) {

        if($scope.board[outer].column[inner].locked === true) {}

        else {
            dataRef.child(outer).child('column').child(inner).child('value').transaction(function (currentValue) {
                if(currentValue === 9) {
                    return null;
                }
                return (currentValue || 0) +1;
            }, function(error,comitted,snapshot) {
            });
        }
    };

    $scope.Restart = function() {
        dataRef.set(initialBoard);
    };

    $scope.Submit = function() {
      var correct = $scope.Check();
        if (correct){
            alert('CONGRATS YOU SEXY MOFO');
        }else{
            alert('BOO HOO TRY AGAIN');
        }
    };

    $scope.Check = function() {
        var colSum = 0;
        var rowSum = 0;
        var squareArr = [0,0,0,0,0,0,0,0,0];
        for (var row = 0; row < 9; row++){
            for(var col = 0; col < 9; col++){
                rowSum += $scope.board[row].column[col].value;
                colSum += $scope.board[col].column[row].value;
            }
            if (colSum != 45 ||rowSum != 45){
                return false;
            }else{
                colSum = 0;
                rowSum = 0;
            }
            for(var k = 0; k < 9; k++){
                if(row < 3) {
                    if (k < 3) {
                        squareArr[0] += $scope.board[row].column[k].value;
                    }else if (k < 6) {
                        squareArr[1] += $scope.board[row].column[k].value;
                    }else{
                        squareArr[2] += $scope.board[row].column[k].value;
                    }
                }else if(row < 6) {
                   if (k < 3) {
                       squareArr[3] += $scope.board[row].column[k].value;
                   }else if(k < 6) {
                       squareArr[4] += $scope.board[row].column[k].value;
                   }else{
                       squareArr[5] += $scope.board[row].column[k].value;
                    }
                }else{
                    if (k < 3) {
                        squareArr[6] += $scope.board[row].column[k].value;
                    }else if(k < 6) {
                        squareArr[7] += $scope.board[row].column[k].value;
                    }else{
                        squareArr[8] += $scope.board[row].column[k].value;
                    }
                }
            }
        }
        for(var i = 0; i < 9; i++) {
            if (squareArr[i] != 45) {
                console.log(squareArr[i]);
                return false;
            }
        }
        return true;
    };

    dataRef.on('value', function(snapshot) {
        $scope.board = snapshot.val();
    });

    dataRef.on('child_changed', function(snapshot){
        $scope.board = snapshot.val();
    });

    $scope.modThree = function (rowNumber) {
        return rowNumber % 3 === 0;
    };
    
    $scope.board = [];

    var initialBoard = [{
        column: [{value: 5, locked: true},{value:null, locked: false},{value:null, locked: false},{value:null, locked: false},{value:8, locked: true},{value:null, locked: false},{value:2, locked: true},{value:null, locked: false},{value:9, locked: true}]
    },
        {
            column: [{value:null, locked: false},{value:null, locked: false},{value:1, locked: true},{value:null, locked: false},{value:null, locked: false},{value:9, locked: true},{value:null, locked: false},{value:4, locked: true},{value:null, locked: false}]
        },
        {
            column: [{value:null, locked: false},{value:null, locked: false},{value:4, locked: true},{value:null, locked: false},{value:null, locked: false},{value:6, locked: true},{value:null, locked: false},{value:null, locked: false},{value:null, locked: false}]
        },
        {
            column: [{value:4, locked: true},{value:null, locked: false},{value:null, locked: false},{value:null, locked: false},{value:null, locked: false},{value:null, locked: false},{value:3, locked: true},{value:9, locked: true},{value:null, locked: false}]
        },
        {
            column: [{value:null, locked: false},{value:5, locked: true},{value:null, locked: false},{value:6, locked: true},{value:null, locked: false},{value:8, locked: true},{value:null, locked: false},{value:1, locked: true},{value:null, locked: false}]
        },
        {
            column: [{value:null, locked: false},{value:1, locked: true},{value:3, locked: true},{value:null, locked: false},{value:null, locked: false},{value:null, locked: false},{value:null, locked: false},{value:null, locked: false},{value:2, locked: true}]
        },
        {
            column: [{value:null, locked: false},{value:null, locked: false},{value:null, locked: false},{value:1, locked: true},{value:null, locked: false},{value:null, locked: false},{value:9, locked: true},{value:null, locked: false},{value:null, locked: false}]
        },
        {
            column: [{value:null, locked: false},{value:3, locked: true},{value:null, locked: false},{value:9, locked: true},{value:null, locked: false},{value:null, locked: false},{value:6, locked: true},{value:null, locked: false},{value:null, locked: false}]
        },
        {
            column: [{value:1, locked: true},{value:null, locked: false},{value:7, locked: true},{value:null, locked: false},{value:6, locked: true},{value:null, locked: false},{value:null, locked: false},{value:null, locked: false},{value:4, locked: true}]
        }
    ];
});