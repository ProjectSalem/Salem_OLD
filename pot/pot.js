var Firebase = require("firebase");
var five = require("johnny-five");

//Create a new reference of Firebase db
var firebaseRef = new Firebase(
    "https://salem-b9740.firebaseio.com/pot"
);

five.Board().on("ready", function() {
    // Create a new pot instance
    var pot = new five.Sensor({
        pin: "A0",
        freq: 250
    });

    // Create a new led array based on pin number
    var ledArray = new five.Led.Array([2, 3, 4]);

    // Listen on data change
    pot.on("data", function() {

        var self = this.value;
        // Print pot value
        console.log(self);

        switch (true) {
            case (self > 500 && self <= 700):
                console.log("1st led on");
                ledArray[0].on();
                ledArray[2].off();
                ledArray[1].off();
                break;
            case (self >700 && self <=900):
                console.log("2nd led on");
                ledArray[0].off();
                ledArray[2].off();
                ledArray[1].on();
                break;
            case (self > 900 && self <= 1023):
                console.log("3rd led on");
                ledArray[0].off();
                ledArray[2].on();
                ledArray[1].off();
                break;
            default:
                console.log("Out of range");
                ledArray[0].off();
                ledArray[2].off();
                ledArray[1].off();
        }

        firebaseRef.set({"potData" : self});
    });
});