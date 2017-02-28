var Firebase = require("firebase");
var express = require("express");

// Create HTTP Server
var app = express();
var server = require("http").createServer(app);
// Attach Socket.io server
var io = require("socket.io")(server);
// Indicate port 3000 as host
var port = process.env.PORT || 3000;


// Create a new firebase reference
var firebaseRef = new Firebase(
    "https://salem-b9740.firebaseio.com/pot"
);

// Make the server listens on port 3000
server.listen(port, function() {
    console.log("Server listening on port %d", port);
});

// Routing to static files
app.use(express.static(__dirname + "/public"));

// Socket server listens on connection event
io.on("connection", function(socket) {
    console.log("Connected and ready!");

    // firebase reference listens on value change,
    // and return the data snapshot as an object
    firebaseRef.on("value", function(snapshot) {
        var potChange = snapshot.val();

        // Print the data object's values
        console.log("snapshot pot data: " + potChange.potData);

    });

});
