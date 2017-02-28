// Register firebase module
var app = angular.module("app", ["firebase"]);

// Set up controller function
app.controller("Ctrl", function($scope, $firebase) {
    var firebaseRef = new Firebase(
        "https://salem-b9740.firebaseio.com/pot"
    );

    // create an AngularFire ref to the data
    var sync = $firebase(firebaseRef);

    $scope.data=sync;
    // pull the data into a local model
    var syncObject = sync.$asObject();

    // sync the object with three-way data binding
    syncObject.$bindTo($scope, "data");

    firebaseRef.on("value", function(snapshot) {
        var value=snapshot.val().potData;
        if(value>512){
            $scope.myObj = {
                "top" : value/4,
                "background-color" : "blue",
            }
        }else{
            $scope.myObj = {
                "left" : value/4,
                "background-color" : "yellow",
            }
        }

    }, function (error) {
        console.log("Error: " + error.code);
    });


});