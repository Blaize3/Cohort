
module.exports = (sequelize, DataTypes) => {
  const ProjectMembers = sequelize.define('ProjectMembers', {
    project_id: {
      type: DataTypes.INTEGER,
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
        isInt: {
          args: true,
          msg: 'project id must be an integer!'
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

  ProjectMembers.associate = (models) => {
    ProjectMembers.hasMany(models.User, {
      foreignKey: 'user_id',
      as: 'project_member',
    });

    ProjectMembers.hasMany(models.Project, {
      foreignKey: 'project_id',
      as: 'project',
    });

    ProjectMembers.hasMany(models.Role, {
      foreignKey: 'role_id',
      as: 'user_role',
    });
  };
  return ProjectMembers;
};
