module.exports = (sequelize, DataTypes) => {
  const GroupMembers = sequelize.define('GroupMembers', {
    group_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'group id is required!'
        },
        notEmpty: {
          args: true,
          msg: 'group id is required!'
        },
        isInt: {
          args: true,
          msg: 'group id must be an integer!'
        }
      }
    },
    user_id: {
      type: DataTypes.INTEGER,
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
    },
    role_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'role id is required!'
        },
        notEmpty: {
          args: true,
          msg: 'role id is required!'
        },
        isInt: {
          args: true,
          msg: 'role id must be an integer!'
        }
      }
    }
  });

  GroupMembers.associate = (models) => {
    GroupMembers.hasMany(models.User, {
      foreignKey: 'user_id',
      as: 'group_member',
    });

    GroupMembers.hasMany(models.Group, {
      foreignKey: 'group_id',
      as: 'group',
    });

    GroupMembers.hasMany(models.Role, {
      foreignKey: 'role_id',
      as: 'user_role',
    });
  };
  return GroupMembers;
};
