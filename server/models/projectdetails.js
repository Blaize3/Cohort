
module.exports = (sequelize, DataTypes) => {
  const ProjectDetails = sequelize.define('ProjectDetails', {
    name: {
      allownull: false,
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'project name is required!'
        },
        isAlphanumeric: {
          args: true,
          msg: 'project name can only accept characters.'
        },
        len: {
          args: [3, 255],
          msg: 'project name must have atlest 3 or more characters.'
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
  return ProjectDetails;
};
