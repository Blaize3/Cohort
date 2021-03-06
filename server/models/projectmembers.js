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
  ProjectMembers.associate = function (models) {
    // associations can be defined here
  };
  return ProjectMembers;
};
