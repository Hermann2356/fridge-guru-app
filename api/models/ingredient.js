'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Ingredient extends Model {}

    Ingredient.init({
        name: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: true,
                len : [0, 100],

            }
        },
        description: {
            type: DataTypes.TEXT,
            validate: {
                notEmpty: true,

            }
        },
        image: {
            type: DataTypes.BLOB('long'),
            allowNull: true,
        },
        consistency: {
            type: DataTypes.STRING,
            validate: {
                isIn: [['Solid', 'Liquid']],

            }
        },
        // SL - Shelf Life
        fridgeSL: {
            type: DataTypes.STRING,
            validate: {

            }
        },
        cupboardSL: {
            type: DataTypes.STRING,
            validate: {

            }
        },
        freezerSL: {
            type: DataTypes.STRING,
            validate: {

            }
        }
    },{
        sequelize,
        modelName: 'ingredient'
    });

    Ingredient.associate = (models) => {
        // association can be defined here
        models.Ingredient.belongsTo(models.Category);
    };

    return Ingredient;
}