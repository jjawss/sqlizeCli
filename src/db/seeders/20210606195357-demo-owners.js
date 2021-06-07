"use strict";

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert("Owners", [
			{
				id: "1",
				firstName: "Cecilia",
				lastName: "Charlton",
				phoneNumber: 5035550109,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				id: "2",
				firstName: "Becky",
				lastName: "Blankenship",
				phoneNumber: 5035550109,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				id: "3",
				firstName: "Amy",
				lastName: "Lutz",
				phoneNumber: 5035550109,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				id: "4",
				firstName: "Monet",
				lastName: "Kirk",
				phoneNumber: 5035550109,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				id: "5",
				firstName: "Zarah",
				lastName: "Chavez",
				phoneNumber: 5035550109,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				id: "6",
				firstName: "Lilly-Grace",
				lastName: "Villegas",
				phoneNumber: 5035550109,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				id: "7",
				firstName: "Ciaron",
				lastName: "Ritter",
				phoneNumber: 5035550109,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				id: "8",
				firstName: "Harlee",
				lastName: "Bradford",
				phoneNumber: 5035550109,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				id: "9",
				firstName: "Oakley",
				lastName: "Liu",
				phoneNumber: 5035550109,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				id: "10",
				firstName: "Fahim",
				lastName: "Akhtar",
				phoneNumber: 5035550109,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				id: "11",
				firstName: "Elena",
				lastName: "Carter",
				phoneNumber: 5035550109,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				id: "12",
				firstName: "Becky",
				lastName: "Blankenship",
				phoneNumber: 5035550109,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				id: "13",
				firstName: "Rocco",
				lastName: "Kearney",
				phoneNumber: 5035550109,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				id: "14",
				firstName: "Danyal",
				lastName: "Wilson",
				phoneNumber: 5035550109,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				id: "15",
				firstName: "Madison",
				lastName: "Barajas",
				phoneNumber: 5035550109,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
		]);
	},

	down: (queryInterface, Sequelize) => {
		queryInterface.bulkDelete("Owners", null, {});
	},
};
