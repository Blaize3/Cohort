module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('ProjectDetails', {
    project_id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    name: {
      allowNull: false,
      type: Sequelize.STRING
    },
    image_url: {
      allowNull: false,
      type: Sequelize.STRING
    },
    member_count: {
      allowNull: false,
      type: Sequelize.INTEGER
    },
    active_users: {
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
  down: queryInterface => queryInterface.dropTable('ProjectDetails')
};
