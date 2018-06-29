module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Contacts', {
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
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    }
  }),
  down: queryInterface => queryInterface.dropTable('Contacts')
};
