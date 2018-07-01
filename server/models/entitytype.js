module.exports = (sequelize, DataTypes) => {
  const EntityType = sequelize.define('EntityType', {
    type_name: {
      allownull: false,
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'entity type name is required!'
        },
        isAlpha: {
          args: true,
          msg: 'entity type name can only accept characters.'
        },
        len: {
          args: [3, 30],
          msg: 'entity type name must have atlest 3 or more characters.'
        }
      }
    },
    description: {
      allownull: false,
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'description is required!'
        },
        isAlphanumeric: {
          args: true,
          msg: 'description can only accept characters, and white spaces.'
        },
        len: {
          args: [3, 255],
          msg: 'description must have atlest 3 or more characters.'
        }
      }
    }
  });
  EntityType.associate = (models) => {
    // associations can be defined here
    EntityType.hasMany(models.Entity, {
      foreignKey: 'type_id',
      as: 'entityTypes',
    });
  };
  return EntityType;
};
