module.exports = (sequelize, DataTypes) => {
  const Connection = sequelize.define('Connection', {
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
  return Connection;
};
