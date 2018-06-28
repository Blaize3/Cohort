module.exports = (sequelize, DataTypes) => {
  const GroupMember = sequelize.define('GroupMember', {
    group_id: {
      allownull: false,
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: {
          args: true,
          msg: 'group id is required!'
        },
        isInt: {
          args: true,
          msg: 'group id must be a number!.'
        }
      }
    },
    user_id: {
      allownull: false,
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: {
          args: true,
          msg: 'user id is required!'
        },
        isInt: {
          args: true,
          msg: 'user id must be a number!.'
        }
      }
    },
    role_id: {
      allownull: false,
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: {
          args: true,
          msg: 'role id is required!'
        },
        isInt: {
          args: true,
          msg: 'role id must be a number!.'
        }
      }
    }
  });
  return GroupMember;
};
