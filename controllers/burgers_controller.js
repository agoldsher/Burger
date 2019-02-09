var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
    burger.selectAll(function (data) {

        res.render("index", {
            burger_data: data
        });
    });
});

router.post("/api/burgers", function (req, res) {
    burger.insertOne(req.body.burger_name, function (data) {
        // Send back the ID of the new quote
        console.log(data);
        res.redirect("/");
    });
});

router.put("/api/burgers/:id", function (req, res) {

    burger.updateOne(req.params.id, function (data) {

        res.status(200).end();

    })
});



// Export routes for server.js to use.
module.exports = router;