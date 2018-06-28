
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('GroupMembers', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    group_id: {
      allowNull: false,
      type: Sequelize.INTEGER
    },
    user_id: {
      allowNull: false,
      type: Sequelize.INTEGER
    },
    role_id: {
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
  down: queryInterface => queryInterface.dropTable('GroupMembers')
};
