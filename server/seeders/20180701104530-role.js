'use strict';

module.exports = {
  up: (queryInterface) => {
      return queryInterface.bulkInsert('Roles', [
        {
          role_title:   'owner',
          privilege:    'full-control',
          description: 'Owner role assumes that the user assigned this privilege owns the listed entity and has full control over the said entity.',
          createdAt: '2018-03-03 08:14:48',
          updatedAt: '2018-03-03 08:14:48'
        }, 
        {
          role_title:   'creator',
          privilege:    'full-control',
          description: 'Creator role assumes that the user assigned this privilege created the listed entity and has full control over the said entity.',
          createdAt: '2018-03-03 08:14:48',
          updatedAt: '2018-03-03 08:14:48'
        },
        {
          role_title:   'administrator',
          privilege:    'write',
          description:  'Administrator role assumes that the user assigned this privilege has been authorized by the Creator or Owner role to edit some aspect of the listed entity.',
          createdAt: '2018-03-03 08:14:48',
          updatedAt: '2018-03-03 08:14:48'
        },
        {
          role_title:   'user',
          privilege:    'read',
          description: 'User role assumes that the user assigned this privilege has access to the listed entity but cannot modifity any aspect of the entity.',
          createdAt: '2018-03-03 08:14:48',
          updatedAt: '2018-03-03 08:14:48'
        }
      ], {});
  },

  down: (queryInterface) => queryInterface.bulkDelete('Roles', null, {})
};
