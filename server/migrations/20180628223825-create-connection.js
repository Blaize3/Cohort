module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Connections', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    initiator: {
      allowNull: false,
      type: Sequelize.INTEGER
    },
    recipient: {
      allowNull: false,
      type: Sequelize.INTEGER
    },
    status: {
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
  down: queryInterface => queryInterface.dropTable('Connections')
};
