module.exports = (sequelize, DataTypes) => {
  const Contacts = sequelize.define('Contacts', {
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
    }
  });
  Contacts.associate = (models) => {
    // associations can be defined here
  };
  return Contacts;
};
