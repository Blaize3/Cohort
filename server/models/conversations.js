module.exports = (sequelize, DataTypes) => {
  const Conversations = sequelize.define('Conversations', {
    initiator: {
      type: Sequelize.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'initiator is required!'
        },
        notEmpty: {
          args: true,
          msg: 'initiator is required!'
        },
        isInt: {
          args: true,
          msg: 'initiator must be an integer!'
        }
      }
    },
    recipient: {
      type: Sequelize.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'recipient is required!'
        },
        notEmpty: {
          args: true,
          msg: 'recipient is required!'
        },
        isInt: {
          args: true,
          msg: 'recipient must be an integer!'
        }
      }
    },
    message_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'message id is required!'
        },
        notEmpty: {
          args: true,
          msg: 'message id is required!'
        },
        isInt: {
          args: true,
          msg: 'message id must be an integer!'
        }
      }
    }
  });
  return Conversations;
};
