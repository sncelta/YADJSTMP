const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');

// const wait = require('node:timers/promises').setTimeout;

const botPerms = [
	PermissionFlagsBits.SendMessages,
	PermissionFlagsBits.ReadMessageHistory,
];

module.exports = {
	data: new SlashCommandBuilder()
		// Command name. Example: /choices
		.setName('choices')
		// Command's description. Shows up in commands menu once / is typed.
		.setDescription('Choices example')
		// Add an option that requires ONLY string/text input.
		.addStringOption(option =>
			// Set name of the option.
			option.setName('choice')
				// Description of the option. Shows up once the command is typed.
				.setDescription('Example choices')
				// Whether the option is neccesary or not. false means it can be empty, true means the opposite.
				.setRequired(true)
				// Add 3 choices with specified name
				.addChoices(
					{ name: 'Test', value: 'Test' },
					{ name: 'Test1', value: 'Test1' },
					{ name: 'Test2', value: 'Test2' },
				)),
	async execute(interaction) {
		/* Initialize a const variable and parse user's choice, then set it to the variable.
		Learn more about parsing options:
			https://discordjs.guide/slash-commands/parsing-options.html#command-options
			our case (choices): https://discordjs.guide/slash-commands/parsing-options.html#choices
		Learn more about const variables:
			https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const
		*/
		/* 'choice' is the option's name, from which you want to parse user's choice from.
			You've set it at line 14.

			'getString' means the option you're parsing is a string.
			There's other types, like Boolean, Integer, Number being the primitive types,
			while User, Channel, Role and Mentionable will
			provide either the respective discord.js class instance if your application has a bot user in the guild or a raw API structure for commands-only deployment.
			https://discordjs.guide/slash-commands/parsing-options.html#command-options
		*/

		if (interaction.guild.members.me.permissions.has(botPerms)) {
			const choice = interaction.options.getString('choice');

			/*
			Makes bot respond if the command was executed.
			content : string = Contents of message to be sent as a response
			ephemeral : boolean = Makes the response message visible only for the executor if set to true. Learn more:
			https://discordjs.guide/slash-commands/response-methods.html#ephemeral-responses

			*/
			await interaction.reply({ content: `You chose: ${choice}!`, ephemeral: true });

			// Deferred response
			// https://discordjs.guide/slash-commands/response-methods.html#deferred-responses
			// wait(4000);
			// await interaction.deferReply({ content: `You chose: ${choice}!`, ephemeral: true });
		}
	},
};