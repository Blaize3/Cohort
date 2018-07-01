
module.exports = (sequelize, DataTypes) => {
  const Connection = sequelize.define('Connection', {
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
          msg: 'status can only accept alphabet characters.'
        }
      }
    }
  });
  Connection.associate = (models) => {
    // associations can be defined here
  };
  return Connection;
};
