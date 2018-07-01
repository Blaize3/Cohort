module.exports = (sequelize, DataTypes) => {
  const Entity = sequelize.define('Entity', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      autoIncrement: false,  
    },
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
    // associations can be defined here;
    Entity.belongs(models.EntityType, {
      foreignKey: 'type_id',
      onDelete: 'CASCADE',
    });

    Entity.hasMany(models.User, {
      foreignKey: 'user_id',
      as: 'users',
    });

    Entity.hasMany(models.Project, {
      foreignKey: 'project_id',
      as: 'projects',
    });

    Entity.hasMany(models.Group, {
      foreignKey: 'group_id',
      as: 'groups',
    });
  };
  return Entity;
};
