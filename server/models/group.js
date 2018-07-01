module.exports = (sequelize, DataTypes) => {
  const Group = sequelize.define('Group', {
    group_id: {
      type: DataTypes.UUID,
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
        isUUID: {
          args: 4,
          msg: 'group id must be a UUID!'
        }
      }
    },
    creator: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'group creator is required!'
        },
        notEmpty: {
          args: true,
          msg: 'group creator is required!'
        },
        isInt: {
          args: true,
          msg: 'group creator must be an integer!'
        }
      }
    },
    owner: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'group owner is required!'
        },
        notEmpty: {
          args: true,
          msg: 'group owner is required!'
        },
        isInt: {
          args: true,
          msg: 'group owner must be an integer!'
        }
      }
    },
    name: {
      allownull: false,
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'group name is required!'
        },
        isAlphanumeric: {
          args: true,
          msg: 'group name can only accept characters.'
        },
        len: {
          args: [3, 255],
          msg: 'group name must have atlest 3 or more characters.'
        }
      }
    },
    image_url: {
      allownull: false,
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'image url is required!'
        },
        len: {
          args: [10, 255],
          msg: 'image url must have atlest 10 characters.'
        }
      }
    },
    purpose: {
      allownull: true,
      type: DataTypes.TEXT,
      defaultValue: null,
      validate: {
        isAlphanumeric: {
          args: true,
          msg: 'purpose type name can only accept characters and numbers.'
        },
        len: {
          args: [10, 1000],
          msg: 'purpose type name must have atlest 10 characters.'
        }
      }
    },
    member_count: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'member count is required!'
        },
        notEmpty: {
          args: true,
          msg: 'member count is required!'
        },
        isInt: {
          args: true,
          msg: 'member count must be an integer!'
        }
      }
    },
    active_users: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'active users is required!'
        },
        notEmpty: {
          args: true,
          msg: 'active users is required!'
        },
        isInt: {
          args: true,
          msg: 'active users must be an integer!'
        }
      }
    }
  });
  Group.associate = function (models) {
    // associations can be defined here
    Group.belongsTo(models.Entity, {
      foreignKey: 'group_id',
      onDelete: 'CASCADE',
    });
  };
  return Group;
};
