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
        // image path stored here
        image: {
            type: DataTypes.STRING,
            allowNull:true,
        },
        consistency: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                isIn: [['SOLID', 'LIQUID', 'RAW']],
            }
        },
        // SL - Shelf Life
        shelfLife: {
            type: DataTypes.STRING,
            allowNull: true,

        },
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