"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("users", [
      {
        name: "Rein",
        email: "rein@codaissuer.com",
        password: "123",
        age: 31,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "David",
        email: "david@codaissuer.com",
        password: "123",
        age: 29,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
