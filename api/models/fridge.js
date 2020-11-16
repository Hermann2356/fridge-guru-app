'use strict';


const { Model, Sequelize } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Fridge extends Model {}

    Fridge.init({
        expiration: {
            type: DataTypes.DATE,

        },
        quantity: {
            type: DataTypes.INTEGER,

        },
    }, {
        sequelize,
        modelName: 'fridge'
    });

    return Fridge;
}