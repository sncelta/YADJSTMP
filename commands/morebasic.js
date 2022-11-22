const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');

const botPerms = [
	PermissionFlagsBits.SendMessages,
	PermissionFlagsBits.ReadMessageHistory,
];

module.exports = {
	data: new SlashCommandBuilder()
		// Command name. Example: /choices
		.setName('hello')
		// Command's description. Shows up in commands menu once / is typed.
		.setDescription('Hello!'),
	async execute(interaction) {
		if (interaction.guild.members.me.permissions.has(botPerms)) {
			interaction.reply('Hello there');
		}
	},
};