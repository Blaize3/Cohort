module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Projects', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    creator: {
      allowNull: false,
      type: Sequelize.INTEGER
    },
    project_id: {
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
  down: queryInterface => queryInterface.dropTable('Projects')
};
