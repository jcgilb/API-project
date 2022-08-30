'use strict';

const { Comment } = require('../models');

const comments = [
  {
    songId: 1,
    userId: 1,
    body: 'hi aphextwin'
  }
];

module.exports = {
  async up(queryInterface, Sequelize) {
    await Comment.bulkCreate(comments, { validate: true });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Comment', {
      where: { title: comments.map(comment => comment.title) }
    }, {});
  }
};




// module.exports = {
//   up: async (queryInterface, Sequelize) => {
//     return queryInterface.bulkInsert('Comments', [
//       {
//         songId: 1,
//         userId: 1,
//         body: 'hi aphextwin'
//       }
//     ], {});
//   },

//   down: async (queryInterface, Sequelize) => {
//     const Op = Sequelize.Op;
//     return queryInterface.bulkDelete('Comments', {
//       id: { [Op.in]: [1] }
//     }, {});
//   }
// };
