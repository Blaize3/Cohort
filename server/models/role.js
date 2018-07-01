module.exports = (sequelize, DataTypes) => {
  const Role = sequelize.define('Role', {
    role_title: {
      allownull: false,
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'role title is required!'
        },
        isAlphanumeric: {
          args: true,
          msg: 'role title can only accept characters.'
        },
        len: {
          args: [3, 255],
          msg: 'role title must have atlest 3 or more characters.'
        }
      }
    },
    privilege: {
      allownull: false,
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'privilege is required!'
        },
        isAlphanumeric: {
          args: true,
          msg: 'privilege can only accept characters.'
        },
        len: {
          args: [3, 255],
          msg: 'privilege must have atlest 3 or more characters.'
        }
      }
    },
    description: {
      allownull: true,
      type: DataTypes.TEXT,
      defaultValue: null,
      validate: {
        isAlphanumeric: {
          args: true,
          msg: 'description can only accept characters.'
        },
        len: {
          args: [10, 1000],
          msg: 'description must have atlest 3 or more characters.'
        }
      }
    }
  });
  Role.associate = function (models) {
    // associations can be defined here
  };
  return Role;
};
