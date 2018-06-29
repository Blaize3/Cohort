module.exports = (sequelize, DataTypes) => {
  const Group = sequelize.define('Group', {
    creator: {
      type: Sequelize.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'group creator is required!'
        },
        notEmpty: {
          args: true,
          msg: 'group creator is required!'
        },
        isInt: {
          args: true,
          msg: 'group creator must be an integer!'
        }
      }
    },
    owner: {
      type: Sequelize.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'group owner is required!'
        },
        notEmpty: {
          args: true,
          msg: 'group owner is required!'
        },
        isInt: {
          args: true,
          msg: 'group owner must be an integer!'
        }
      }
    },
    group_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'group id is required!'
        },
        notEmpty: {
          args: true,
          msg: 'group id is required!'
        },
        isInt: {
          args: true,
          msg: 'group id must be an integer!'
        }
      }
    }
  });
  return Group;
};