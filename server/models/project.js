module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define('Project', {
    project_id: {
      type: DataTypes.UUID,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'project id is required!'
        },
        notEmpty: {
          args: true,
          msg: 'project id is required!'
        },
        isUUID: {
          args: 4,
          msg: 'project id must be a UUID!'
        }
      }
    },
    creator: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'creator is required!'
        },
        notEmpty: {
          args: true,
          msg: 'creator is required!'
        },
        isInt: {
          args: true,
          msg: 'creator must be an integer!'
        }
      }
    },
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
  Project.associate = function (models) {
    // associations can be defined here
    Project.belongsTo(models.Entity, {
      foreignKey: 'project_id',
      onDelete: 'CASCADE',
    });
  };
  return Project;
};
