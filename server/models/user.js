module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    user_id: {
      type: DataTypes.UUID,
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
        isUUID: {
          args: 4,
          msg: 'user id must be a UUID!'
        }
      }
    },
    lastname: {
      allownull: false,
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'lastname is required!'
        },
        isAlpha: {
          args: true,
          msg: 'lastname can only accept characters.'
        },
        len: {
          args: [3, 30],
          msg: 'lastname must have atlest 3 or more characters.'
        }
      }
    },
    firstname: {
      allownull: false,
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'firstname is required!'
        },
        isAlpha: {
          args: true,
          msg: 'firstname can only accept characters.'
        },
        len: {
          args: [3, 30],
          msg: 'firstname must have atlest 3 or more characters.'
        }
      }
    },
    gender: {
      allownull: false,
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'gender is required!'
        },
        isAlpha: {
          args: true,
          msg: 'gender can only accept characters.'
        },
        len: {
          args: [3, 8],
          msg: 'gender must have atlest 3 characters and not more than 8 characters.'
        }
      }
    },
    email: {
      allownull: false,
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: 'Invalid email. Try you@domain.com!'
        }
      }
    },
    mobile: {
      allownull: false,
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'mobile number is required!'
        },
        isNumeric: {
          args: true,
          msg: 'mobile number title can only accept number digits.'
        },
        len: {
          args: [11, 15],
          msg: 'mobile number must have atlest 11 digits and not more than 15 characters.'
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
        },
        len: {
          args: [8, 255],
          msg: 'password must have atlest 8 characters.'
        }
      }
    },
    dob: {
      allownull: true,
      type: DataTypes.DATE,
      defaultValue: null,
      validate: {
        isDate: {
          args: true,
          msg: 'invalid date. try yyyy-mm-dd'
        }
      }
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      validate: {
        isInt: {
          args: true,
          msg: 'status must be an integer!'
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
    job_role: {
      allownull: true,
      type: DataTypes.STRING,
      defaultValue: null,
      validate: {
        isAlphanumeric: {
          args: true,
          msg: 'job role can only accept alphabet and numeric characters.'
        },
        len: {
          args: [3, 100],
          msg: 'job role must have atlest 3 characters.'
        }
      }
    },
    company: {
      allownull: true,
      type: DataTypes.STRING,
      defaultValue: null,
      validate: {
        isAlphanumeric: {
          args: true,
          msg: 'company can only accept alphabet and numeric characters.'
        },
        len: {
          args: [5, 255],
          msg: 'company must have atlest 5 characters.'
        }
      }
    },
    state: {
      allownull: true,
      type: DataTypes.STRING,
      defaultValue: null,
      validate: {
        isAlphanumeric: {
          args: true,
          msg: 'state can only accept alphabet and numeric characters.'
        },
        len: {
          args: [3, 255],
          msg: 'state must have atlest 3 characters.'
        }
      }
    },
    country: {
      allownull: true,
      type: DataTypes.STRING,
      defaultValue: null,
      validate: {
        isAlphanumeric: {
          args: true,
          msg: 'country can only accept alphabet and numeric characters.'
        },
        len: {
          args: [3, 255],
          msg: 'country must have atlest 3 characters.'
        }
      }
    },
    last_login: {
      allownull: true,
      type: DataTypes.DATE,
      defaultValue: null,
      validate: {
        isDate: {
          args: true,
          msg: 'invalid date. try yyyy-mm-dd'
        }
      }
    },
    last_logout: {
      allownull: true,
      type: DataTypes.DATE,
      defaultValue: null,
      validate: {
        isDate: {
          args: true,
          msg: 'invalid date. try yyyy-mm-dd'
        }
      }
    }
  });
  User.associate = function (models) {
    // associations can be defined here
    User.belongsTo(models.Entity, {
      foreignKey: 'user_id',
      onDelete: 'CASCADE',
    });
  };
  return User;
};
