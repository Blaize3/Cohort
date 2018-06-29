module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('UserDetails', {
    user_id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    lastname: {
      allowNull: false,
      type: Sequelize.STRING
    },
    firstname: {
      allowNull: false,
      type: Sequelize.STRING
    },
    gender: {
      allowNull: false,
      type: Sequelize.STRING
    },
    email: {
      allowNull: false,
      unique: true,
      type: Sequelize.STRING
    },
    mobile: {
      allowNull: false,
      unique: true,
      type: Sequelize.STRING
    },
    password: {
      allowNull: false,
      type: Sequelize.STRING
    },
    dob: {
      allowNull: true,
      type: Sequelize.DATE
    },
    status: {
      allowNull: true,
      type: Sequelize.STRING
    },
    image_url: {
      allowNull: false,
      type: Sequelize.STRING
    },
    job_role: {
      allowNull: true,
      type: Sequelize.STRING
    },
    company: {
      allowNull: true,
      type: Sequelize.STRING
    },
    state: {
      allowNull: true,
      type: Sequelize.STRING
    },
    country: {
      allowNull: true,
      type: Sequelize.STRING
    },
    last_login: {
      allowNull: true,
      type: Sequelize.DATE
    },
    last_logout: {
      allowNull: true,
      type: Sequelize.DATE
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
  down: queryInterface => queryInterface.dropTable('UserDetails')
};
