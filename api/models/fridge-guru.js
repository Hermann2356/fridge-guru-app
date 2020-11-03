'use strict';
const { model } = require('sequelize');
const { bcrypt } = require('bcryptjs');
const { isValidPassword } = require('./utilities/utilities.js');

module.exports = (sequelize, DataTypes) =>{
    class User extends Model {
        getFullName() {
            return
        }
    }

    User.init({
        firstName: {type: DataTypes.String},
        lastName: {type: DataTypes.String},
        email: {
            type: DataTypes.String,
            unique: true,
            validate: {
                isEmail: true,
            },
        },
        passwordHash: { type: DataTypes.Hash},
        password: {
            type: DataTypes.virtual,
            validate: {
                isLongEnough: function (val){
                    if(val.length < 7){
                        throw new Error("Please choose a longer password");
                    }
                },
            },
        },
    }, {
        sequelize,
        modelName: 'user'
    });

    User.associate = (models) => {
        // asociations can be defined here
    };

    User.beforeSace((user, options) => {
        if(password){
            user.passwordHash = bcrypt.hashSync(user.password, 10);
        }
    })

    return User;
};