module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('EntityTypes', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    type_name: {
      allowNull: false,
      type: Sequelize.STRING
    },
    description: {
      allowNull: false,
      type: Sequelize.STRING
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
  down: queryInterface => queryInterface.dropTable('EntityTypes')
};
