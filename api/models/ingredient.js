'use strict';

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
        }
    })
}