'use strict'
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Ingredient extends Model {}

    Ingredient.init({
        name: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: true,
            }
        },
        description: {
            type: DataTypes.TEXT,
            validate: {
                allowNull: false,
                len: [0, 500],
            }
        }
    }, {
        sequelize,
        modelName: 'ingredient'
    });

    Ingredient.associate = (models) => {

    };

    return Ingredient;
};