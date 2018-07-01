module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Projects', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    project_id: {
      allowNull: false,
      type: Sequelize.UUID,
      onDelete: 'CASCADE',
      references: {
        model: 'Entities',
        key: 'id',
        as: 'project_id',
      }
    },
    creator: {
      allowNull: false,
      type: Sequelize.INTEGER,
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
  down: queryInterface => queryInterface.dropTable('Projects')
};
