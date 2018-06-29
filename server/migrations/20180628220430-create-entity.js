module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Entities', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    type_id: {
      allowNull: false,
      type: Sequelize.INTEGER
    },
    code_number: {
      allowNull: false,
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
