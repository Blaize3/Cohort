
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: {
      allownull: false,
      unique: true,
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'email field is required!'
        },
        isEmail: {
          args: true,
          msg: 'Invalid email. Try you@domain.com!'
        }
      }
    },
    firstname: {
      allownull: false,
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Firstname is required!'
        },
        is: {
          args: /^[a-zA-Z _]+$/,
          msg: 'Firstname can only accept characters and white spaces.'
        },
        len: {
          args: [3, 30],
          msg: 'Firstname must have atlest 3 or more characters.'
        }
      }
    },
    lastname: {
      allownull: false,
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Lastname is required!'
        },
        is: {
          args: /^[a-zA-Z _]+$/,
          msg: 'Lastname can only accept characters and white spaces.'
        },
        len: {
          args: [3, 30],
          msg: 'Lastname must have atlest 3 or more characters.'
        }
      }
    },
    phone: {
      allownull: false,
      unique: true,
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Phone number is required!'
        },
        len: {
          args: [11, 15],
          msg: 'Phone number must have atlest 11 digits and cannot be greater than 15 digits.'
        }
      }
    },
    password: {
      allownull: false,
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'password is required!'
        }
      }
    },
    image_url: {
      allownull: false,
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Image is required!'
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
        }
      }
    },
    last_login: {
      allownull: true,
      type: DataTypes.DATE,
      validate: {
        isDate: {
          args: true,
          msg: 'Invalid date format!'
        }
      }
    },
    last_logout: {
      allownull: true,
      type: DataTypes.DATE,
      validate: {
        isDate: {
          args: true,
          msg: 'Invalid date format!'
        }
      }
    },
    job_role: {
      allownull: true,
      type: DataTypes.STRING,
      validate: {
        is: {
          args: /^[a-zA-Z0-9 _]+$/,
          msg: 'Job role acceptc characters, numbers and white spaces.'
        },
        len: {
          args: [3, 30],
          msg: 'Job role  must have atlest 3 or more characters.'
        }
      }
    },
    job_role_desc: {
      allownull: true,
      type: DataTypes.TEXT,
      validate: {
        is: {
          args: /^[a-zA-Z0-9 _]+$/,
          msg: 'Job role dscription acceptc characters, numbers and white spaces.'
        },
        len: {
          args: [5, 1000],
          msg: 'Job role dscription must have atlest 5 or more characters.'
        }
      }
    },
    company: {
      allownull: true,
      type: DataTypes.STRING,
      validate: {
        is: {
          args: /^[a-zA-Z0-9 _]+$/,
          msg: 'Company acceptc characters, numbers and white spaces.'
        },
        len: {
          args: [3, 30],
          msg: 'Company must have atlest 3 or more characters.'
        }
      }
    }
  });

  return User;
};
