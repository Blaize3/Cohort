module.exports = (sequelize, DataTypes) => {
  const Messages = sequelize.define('Messages', {
    message_body: {
      allownull: false,
      type: DataTypes.TEXT,
      validate: {
        notEmpty: {
          args: true,
          msg: 'message body is required!'
        }
      }
    },
    status: {
      allownull: false,
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'status is required!'
        },
        isAlpha: {
          args: true,
          msg: 'status can only accept characters.'
        },
        len: {
          args: [3, 15],
          msg: 'status must have atlest 3 or more characters.'
        }
      }
    }
  });
  Messages.associate = function (models) {
    // associations can be defined here
    Messages.hasMany(models.Conversations, {
      foreignKey: 'message_id',
      as: 'messages',
    });
  };
  return Messages;
};
