
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Groups', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    group_name: {
      allowNull: false,
      type: Sequelize.STRING
    },
    theme: {
      allowNull: true,
      type: Sequelize.TEXT
    },
    image_url: {
      allowNull: false,
      type: Sequelize.STRING
    },
    member_count: {
      allowNull: false,
      type: Sequelize.INTEGER
    },
    created_by: {
      allowNull: false,
      type: Sequelize.INTEGER
    },
    owned_by: {
      allowNull: false,
      type: Sequelize.INTEGER
    },
    group_id: {
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
  down: queryInterface => queryInterface.dropTable('Groups')
};
