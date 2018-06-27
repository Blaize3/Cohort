module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Users', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    phone: {
      allowNull: false,
      unique: true,
      type: Sequelize.STRING
    },
    email: {
      allowNull: false,
      unique: true,
      type: Sequelize.STRING
    },
    firstname: {
      allowNull: false,
      type: Sequelize.STRING
    },
    lastname: {
      allowNull: false,
      type: Sequelize.STRING
    },
    password: {
      allowNull: false,
      type: Sequelize.STRING
    },
    image_url: {
      allowNull: false,
      type: Sequelize.STRING
    },
    user_id: {
      allowNull: true,
      type: Sequelize.INTEGER
    },
    last_login: {
      allowNull: true,
      type: Sequelize.DATE
    },
    last_logout: {
      allowNull: true,
      type: Sequelize.DATE
    },
    job_role: {
      allowNull: true,
      type: Sequelize.STRING
    },
    job_role_desc: {
      allowNull: true,
      type: Sequelize.TEXT
    },
    company: {
      allowNull: true,
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
  down: queryInterface => queryInterface.dropTable('Users')
};
