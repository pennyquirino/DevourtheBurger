const orm = require("../config/orm.js");

const burger = {
    selectAll(cb) {
        orm.selectAll("burgers", (res) => cb(res));
    },

    insertBurger(vals, cols, cb) {
        orm.insertBurger("burgers", cols, vals, (res) => cb(res));
    },

    updateBurger(objCV, condition, cb) {
        orm.updateBurger("burgers", objCV, condition, (res) => cb(res));
    }
};



module.exports = burger;