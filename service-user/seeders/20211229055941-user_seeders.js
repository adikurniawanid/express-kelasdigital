'use strict';
const bycript= require('bcrypt');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
      await queryInterface.bulkInsert('users', [
        {
          name:"adi",
          profession:"Database Engineer",
          role:"admin",
          email:"adi@mail.com",
          password: await bycript.hash('rahasia', 10),
          created_at:new Date(),
          updated_at:new Date()
        },
        {
          name:"budi",
          profession:"Database Engineer",
          role:"admin",
          email:"adikur@mail.com",
          password: await bycript.hash('adadeh', 10),
          created_at:new Date(),
          updated_at:new Date()
        }
      ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  }
};
