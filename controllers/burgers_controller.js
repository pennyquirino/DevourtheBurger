const express = require("express");
const router = express.Router();

const burger = require("../models/burger.js");

router.get("/", (req, res) => {
    burger.selectAll((data) => {
        const handlebarObject = {
            burgers: data,
        };
        console.log("handlebarObject", handlebarObject);
        res.render("index", handlebarObject);
    });
});