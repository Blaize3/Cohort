module.exports = (sequelize, DataTypes) => {
  const Entity = sequelize.define('Entity', {
    type_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'entity type id is required!'
        },
        notEmpty: {
          args: true,
          msg: 'entity type id is required!'
        },
        isInt: {
          args: true,
          msg: 'entity type id must be an integer!'
        }
      }
    },
    code_number: {
      type: Sequelize.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'code number is required!'
        },
        notEmpty: {
          args: true,
          msg: 'code number is required!'
        },
        isInt: {
          args: true,
          msg: 'code number must be an integer!'
        }
      }
    }
  });
  return Entity;
};
