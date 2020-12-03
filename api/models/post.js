'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class Post extends Model {}

  Post.init({
    // image path stored here
    postImage: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    caption: {
      type: DataTypes.STRING,
      validate: {
        len: [3, 250],
        notEmpty: true,
      }
    },
    likes: {
      type: DataTypes.INTEGER,
      validate: {
        isInt: true,
      }
    },
    dislikes: {
      type: DataTypes.INTEGER,
      validate: {
        isInt: true,
      }
    },
  }, {
    sequelize,
    modelName: 'post'
  });

  Post.associate = (models) => {
    // associations can be defined here
  };

  return Post;
};