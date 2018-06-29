module.exports = (sequelize, DataTypes) => {
  const Contacts = sequelize.define('Contacts', {
    initiator: {
      type: DataTypes.INTEGER,
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
      type: DataTypes.INTEGER,
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
    }
  });
  return Contacts;
};
