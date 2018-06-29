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
      type: Sequelize.INTEGER
    },
    recipient: {
      allowNull: false,
      type: Sequelize.INTEGER
    },
    message_id: {
      allowNull: false,
      type: Sequelize.INTEGER,
      onDelete: 'CASCADE',
      references: {
        model: 'Messages',
        key: 'id',
        as: 'message_id',
      }
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
