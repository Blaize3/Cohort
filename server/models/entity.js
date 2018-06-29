module.exports = (sequelize, DataTypes) => {
  const Entity = sequelize.define('Entity', {
    type_id: {
      type: DataTypes.INTEGER,
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
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      validate: {
        isInt: {
          args: true,
          msg: 'code number must be an integer!'
        }
      }
    }
  });

  Entity.associate = (models) => {
    Entity.hasMany(models.User, {
      foreignKey: 'user_id',
      as: 'user_id',
    });

    Entity.hasMany(models.Project, {
      foreignKey: 'project_id',
      as: 'project_id',
    });

    Entity.hasMany(models.Group, {
      foreignKey: 'group_id',
      as: 'group_id',
    });
  };
  return Entity;
};
