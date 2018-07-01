module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Entities', {
    id: {
      allowNull: false,
      autoIncrement: false,
      primaryKey: true,
      type: Sequelize.UUID
    },
    type_id: {
      allowNull: false,
      type: Sequelize.INTEGER,
      onDelete: 'CASCADE',
      references: {
        model: 'EntityTypes',
        key: 'id',
        as: 'type_id',
      }
    },
    code_number: {
      allowNull: true,
      type: Sequelize.INTEGER
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    }
  }),
  down: queryInterface => queryInterface.dropTable('Entities')
};
