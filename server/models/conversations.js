module.exports = (sequelize, DataTypes) => {
  const Conversations = sequelize.define('Conversations', {
    initiator: {
      type: DataTypes.UUID,
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
        isUUID: {
          args: true,
          msg: 'initiator must be a UUID!'
        }
      }
    },
    recipient: {
      type: DataTypes.UUID,
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
        isUUID: {
          args: true,
          msg: 'recipient must be a UUID!'
        }
      }
    },
    message_id: {
      type: DataTypes.INTEGER,
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
  Conversations.associate = (models) => {
    // associations can be defined here
    Conversations.belongs(models.Messages, {
      foreignKey: 'message_id',
      onDelete: 'CASCADE',
    });
  };
  return Conversations;
};
