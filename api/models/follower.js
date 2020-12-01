'use strict';
const {Model} = require('sequelize');


module.exports = (sequelize, DataTypes) => {
    class Follower extends Model {}

    Follower.init({

    }, {
        sequelize,
        modelName: 'follower'
    });
    return Follower;
};