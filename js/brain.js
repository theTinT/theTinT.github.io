var myApp = angular.module('myApp', ['firebase']);
myApp.controller('SuDuoKuController', function ($scope, $firebase) {

    var dataRef = new Firebase('https://sudoku1v1.firebaseio.com/tristan');
    var fb = $firebase(dataRef);
    var syncObj = fb.$asObject();

    syncObj.$bindTo($scope,'$scope.board');

    $scope.CellClick = function (row, col){
      val =  $scope.board[row].column[col].value;
        if (val < 9) {
        	$scope.board[row].column[col].value += 1; 
        }else{
            $scope.board[row].column[col].value = null;
        }
    };

    $scope.Restart = function() {
        dataRef.set(initialBoard);
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