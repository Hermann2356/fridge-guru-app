'use strict'
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Recipe extends Model {}

    Recipe.init({
        completed: {
            type: DataTypes.STRING,
            defaultValue: 'NO',
            validate: {
                isIn: [['YES','NO','PENDING']]
            }
        },
        shares: {
            type: DataTypes.INTEGER,
            validate: {
                isInt: true,
            }
        },
        likes: {
            type: DataTypes.INTEGER,
            validate: {
                isInt: true,
            }
        }
    }, {
        sequelize,
        modelName: 'recipe'
    });

    Recipe.associate = (models) => {
        // association can be defined here
        models.Recipe.belongsToMany(models.Category,{through: 'recipe_category'});

    }
    return Recipe;
};