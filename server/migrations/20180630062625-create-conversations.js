module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Conversations', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    initiator: {
      allowNull: false,
      type: Sequelize.UUID
    },
    recipient: {
      allowNull: false,
      type: Sequelize.UUID
    },
    message_id: {
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
  down: queryInterface => queryInterface.dropTable('Conversations')
};
