/*eslint-disable*/
module.exports = (sequelize, DataTypes) => {
  const ProjectMember = sequelize.define('ProjectMember', {
    project_id: {
      allownull: false,
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: {
          args: true,
          msg: 'project id is required!'
        },
        isInt: {
          args: true,
          msg: 'project id must be a number!.'
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
  return ProjectMember;
};
