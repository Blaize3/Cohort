module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Invitations', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    project_id: {
      allowNull: false,
      type: Sequelize.INTEGER
    },
    from: {
      allowNull: false,
      type: Sequelize.STRING
    },
    to: {
      allowNull: false,
      type: Sequelize.STRING
    },
    subject: {
      allowNull: false,
      type: Sequelize.STRING
    },
    email_body: {
      allowNull: false,
      type: Sequelize.TEXT
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
  down: queryInterface => queryInterface.dropTable('Invitations')
};
