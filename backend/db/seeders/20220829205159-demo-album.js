'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Albums', [
      {
        userId: 1,
        title: 'Collapse EP',
        description: '2018, 5 songs',
        imageUrl: 'https://soundcloud.com/richarddjames/sets/collapse-ep-4'
        // imageUrl: '../frontend/assets/aphex-twin-i-care-because-you-do.jpg'
      },
      {
        userId: 2,
        title: 'Berhana',
        description: '2016, 6 songs',
        // imageUrl: '../frontend/assets/berhana.jpg',
        imageUrl: 'https://soundcloud.com/berhana/sets/berhana-2'
      },
      {
        userId: 3,
        title: 'Handmade Cities',
        description: '2016, 7 songs',
        // imageUrl: '../frontend/assets/handmade-cities.jpg',
        imageUrl: 'https://soundcloud.com/plini-music/handmade-cities'
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Albums', {
      title: { [Op.in]: ['...I Care Because You Do', 'Berhana', 'Handmade Cities'] }
    }, {});
  }
};
