
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    user_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'user id is required!'
        },
        notEmpty: {
          args: true,
          msg: 'user id is required!'
        },
        isInt: {
          args: true,
          msg: 'user id must be an integer!'
        }
      }
    }
  });
  return User;
};
