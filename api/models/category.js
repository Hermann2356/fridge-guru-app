'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
    class Category extends Model {}

    Category.init({
        name: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: true,
                len : [0, 100],

            },
            pointValue: {
                type: DataTypes.INTEGER,
                validate: {
                    isInt: true,

                }
            }
        },
    }, {
        sequelize,
        modelName: 'category'
    });

    Category.associate = (models) =>{
        // association can be defined here
        models.Category.hasMany(models.Ingredient);
    };

    return Category;
};