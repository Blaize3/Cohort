module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Groups', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    group_id: {
      allowNull: false,
      type: Sequelize.INTEGER,
      onDelete: 'CASCADE',
      references: {
        model: 'Entity',
        key: 'id',
        as: 'group_id',
      }
    },
    creator: {
      allowNull: false,
      type: Sequelize.INTEGER
    },
    owner: {
      allowNull: false,
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
    purpose: {
      allowNull: false,
      type: Sequelize.TEXT
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
  down: queryInterface => queryInterface.dropTable('Groups')
};
