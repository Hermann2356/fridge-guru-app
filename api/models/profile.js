'use strict';
const {Model} = require('sequelize');


module.exports = (sequelize, DataTypes) => {
    class Profile extends Model {}

    Profile.init({
        // image path stored here
        profileImage: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        bio: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        lvl: {
            type: DataTypes.INTEGER,
            defaultValue: 1,
            validate: {},
        },
        status: {
            type: DataTypes.STRING,
            validate: {},
        },

    }, {
        sequelize,
        modelName: 'profile'
    });

    Profile.associate = (models) => {
        // associations can be defined here
        Profile.belongsTo(models.User);
    };

    return Profile;
};