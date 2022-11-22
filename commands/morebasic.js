const { SlashCommandBuilder } = require('discord.js');


module.exports = {
	data: new SlashCommandBuilder()
		// Command name. Example: /choices
		.setName('hello')
		// Command's description. Shows up in commands menu once / is typed.
		.setDescription('Hello!'),
	async execute(interaction) {
		interaction.reply('Hello there');
	},
};