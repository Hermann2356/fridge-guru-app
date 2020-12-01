'use strict';
const {Model} = require('sequelize');


module.exports = (sequelize, DataTypes) => {
    class SavedRecipe extends Model {}

    SavedRecipe.init({

    }, {
        sequelize,
        modelName: 'savedRecipe'
    });
    return SavedRecipe;
};