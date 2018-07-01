module.exports = (sequelize, DataTypes) => {
  const Invitation = sequelize.define('Invitation', {
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
    from: {
      allownull: false,
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'email is required!'
        },
        isEmail: {
          args: true,
          msg: 'Invalid email. Try you@domain.com!'
        }
      }
    },
    to: {
      allownull: false,
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'email is required!'
        },
        isEmail: {
          args: true,
          msg: 'Invalid email. Try you@domain.com.'
        }
      }
    },
    subject: {
      allownull: false,
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'subject is required!'
        },
        isAlphanumeric: {
          args: true,
          msg: 'subject can only accept characters and numbers.'
        },
        len: {
          args: [5, 255],
          msg: 'subject must have atlest 3 or more characters.'
        }
      }
    },
    email_body: {
      allownull: false,
      type: DataTypes.TEXT,
      validate: {
        notEmpty: {
          args: true,
          msg: 'email body is required!'
        },
        isAlphanumeric: {
          args: true,
          msg: 'email body can only accept characters.'
        },
        len: {
          args: [20, 1000],
          msg: 'email body must have atlest 3 or more characters.'
        }
      }
    }
  });
  Invitation.associate = function (models) {
    // associations can be defined here
  };
  return Invitation;
};
