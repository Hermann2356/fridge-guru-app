'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
    class Category extends Model {}

    Category.init({
        name: {
            type: DataTypes.STRING,
            unique: true,
            validate: {
                notEmpty: true,
                len : [0, 100],

            },
        },
        pointValue: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
            validate: {
                isInt: true,

            }
        },
    }, {
        sequelize,
        modelName: 'category'
    });

    Category.associate = (models) =>{
        // association can be defined here
        models.Category.hasMany(models.Ingredient);
        models.Category.belongsToMany(models.Recipe, {through: 'recipe_category'});
    };

    return Category;
};