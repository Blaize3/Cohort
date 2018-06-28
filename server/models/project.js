module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define('Project', {
    project_name: {
      allownull: false,
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'project name is required!'
        },
        is: {
          args: /^[a-zA-Z0-9 _]+$/,
          msg: 'project name can only accept characters, numbers and white spaces.'
        },
        len: {
          args: [3, 30],
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
        }
      }
    },
    member_count: {
      allownull: false,
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: {
          args: true,
          msg: 'member count is required!'
        },
        isInt: {
          args: true,
          msg: 'member count must be a number!.'
        }
      }
    },
    created_by: {
      allownull: false,
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: {
          args: true,
          msg: 'created by is required!'
        },
        isInt: {
          args: true,
          msg: 'created by must be a number!.'
        }
      }
    },
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
    }
  });
  return Project;
};
