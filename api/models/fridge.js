'use strict';


const { Model, Sequelize } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Fridge extends Model {}

    Fridge.init({
        expiration: {
            type: DataTypes.DATE,

        },
    }, {
        sequelize,
        modelName: 'fridge'
    });

    return Fridge;
}