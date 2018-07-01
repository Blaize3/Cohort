'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('EntityTypes', [
        {
          type_name:    'user',
          description: 'Will be updated ...',
          createdAt: '2018-03-03 08:14:48',
          updatedAt: '2018-03-03 08:14:48'
        },
        {
          type_name:    'project',
          description: 'Will be updated ...',
          createdAt: '2018-03-03 08:14:48',
          updatedAt: '2018-03-03 08:14:48'
        },
        {
          type_name:    'group',
          description: 'Will be updated ...',
          createdAt: '2018-03-03 08:14:48',
          updatedAt: '2018-03-03 08:14:48'
        }
      ], {});
  },

  down: queryInterface => queryInterface.bulkDelete('EntityTypes', null, {})
};
