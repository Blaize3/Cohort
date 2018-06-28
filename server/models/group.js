module.export = (sequelize, DataTypes) => {
  const Group = sequelize.define('Group', {
    group_name: {
      allownull: false,
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Group name is required!'
        },
        is: {
          args: /^[a-zA-Z0-9 _]+$/,
          msg: 'Group name can only accept characters, numbers and white spaces.'
        },
        len: {
          args: [3, 30],
          msg: 'Group name must have atlest 3 or more characters.'
        }
      }
    },
    theme: {
      allownull: true,
      type: DataTypes.TEXT,
      validate: {
        is: {
          args: /^[a-zA-Z0-9 _]+$/,
          msg: 'theme can only accept characters and white spaces.'
        },
        len: {
          args: [10, 1000],
          msg: 'theme must have atlest 3 or more characters.'
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
    owned_by: {
      allownull: false,
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: {
          args: true,
          msg: 'owned by is required!'
        },
        isInt: {
          args: true,
          msg: 'owned by must be a number!.'
        }
      }
    },
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
    }
  });
  return Group;
};
