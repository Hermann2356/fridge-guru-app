'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataType) => {
    class Category extends Model {}

    Category.init({
        name: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: true,
            }
        },
        description: {
            type: DataType.TEXT,
            validate: {
                allowNull: false,
                len: [0, 500],
            },
        },
        pointValue: {
            type: DataType.INTEGER,
            validate: {
                isInt: true,
            }
        }
    }, {
        sequelize,
        modelName: 'category'
    });

    Category.associate = (models) => {
        // association


    };

    return Category;
};

