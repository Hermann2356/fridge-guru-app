'use strict';
const {Model} = require('sequelize');
const bcrypt = require('bcryptjs');


module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        getFullname() {
            return [this.firstName, this.lastName].join(' ');
        }
    }

    User.init({
        firstName: {type: DataTypes.STRING},
        lastName: {type: DataTypes.STRING},
        email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
            validate: {
                isEmail: true,
            },
        },
        username: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
            validate: {
                is:["^(?=[a-zA-Z0-9._]{8,20}$)(?!.*[_.]{2})[^_.].*[^_.]$"],
                len: [8,20],
            }
        },
        passwordHash: {type: DataTypes.STRING},
        password: {
            type: DataTypes.VIRTUAL,
            validate: {
                isLongEnough: (val) => {
                    if (val.length < 7) {
                        throw new Error("Please choose a longer password");
                    }
                },
            },
        },
        lvl: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
            validate: {},
        },
      status: {
        type: DataTypes.STRING,
        validate: {},
      },
    }, {
        sequelize,
        modelName: 'user'
    });

    User.associate = (models) => {
        // associations can be defined here
        models.User.belongsToMany(models.Ingredient, { through: 'fridge' });
    };

    User.beforeSave((user, options) => {
        if (user.password) {
            user.passwordHash = bcrypt.hashSync(user.password, 10);
        }
    });

    return User;
};