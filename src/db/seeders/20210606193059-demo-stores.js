"use strict";

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert("Stores", [
			{
				id: "1",
				name: "PetSmart",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				id: "2",
				name: "Petco",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				id: "3",
				name: "Pet Supplies Plus",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
		]);
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete("Stores", null, {});
	},
};
