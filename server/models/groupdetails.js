module.exports = (sequelize, DataTypes) => {
  const GroupDetails = sequelize.define('GroupDetails', {
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
      type: Sequelize.INTEGER,
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
      type: Sequelize.INTEGER,
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
  return GroupDetails;
};
