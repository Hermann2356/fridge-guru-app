'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Ingredient extends Model {}

    Ingredient.init({
        name: {
            type: DataTypes.STRING,
            unique: true,
            validate: {
                notEmpty: true,
                len : [0, 100],

            }
        },
        image: {
            type: DataTypes.BLOB('long'),
            allowNull: true,
        },
        consistency: {
            type: DataTypes.STRING,
            validate: {
                isIn: [['SOLID', 'LIQUID', 'RAW']],

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

        models.Ingredient.belongsToMany(models.User, { through: 'fridge'});


    };

    return Ingredient;
}