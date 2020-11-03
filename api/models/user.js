'use strict';
const { Model } = require('sequelize');
const bcrypt = require('bcryptjs');

module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        getFullName() {
            return[this.firstName, this.lastName].join(' ');
        }
    }


    // firstName, lastName, email, passwordHash, password
    User.init({
        firstName : { type : DataTypes.String },
        lastName : { type: DataTypes.String },
        email : {
            type : DataTypes.String,
            unique : true,
            allowNull : false,
            validate : {
                isEmail : true,
            },
        },
        passwordHash: { type : DataTypes.String },
        password : {
            type : DataTypes.VIRTUAL,
            validate : {
                isLongEnough :  (val) => {
                    if(val.length < 7 ){
                        throw new Error("Please choose a longer password");
                    }
                },
            },
        },
    }, {
        sequelize,
        modelName : 'user'
    });

    User.associate = (model) =>{
        // associations can be defined here
    }

    // Hashes the user password 10 times before it it stored
    User.beforeSave((user, options) =>{
        if(user.password) {
            user.passwordHash = bcrypt.hashSync(user.password, 10);
        }
    });

    return User;
};