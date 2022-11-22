const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');

const botPerms = [
	PermissionFlagsBits.SendMessages,
	PermissionFlagsBits.ReadMessageHistory,
];

module.exports = {
	data: new SlashCommandBuilder()
		// Command name. Example: /choices
		.setName('options')
		// Command's description. Shows up in commands menu once / is typed.
		.setDescription('Hello!')
		.addStringOption(option =>
			option
				.setName('text')
				.setDescription('String option')
				.setRequired(true),
		)
		.addNumberOption(option =>
			option
				.setName('number')
				.setDescription('Number option')
				.setRequired(true),
		)
		.addBooleanOption(option =>
			option
				.setName('boolean')
				.setDescription('Boolean option')
				.setRequired(true),
		)
		.addUserOption(option =>
			option
				.setName('user')
				.setDescription('User option')
				.setRequired(false),
		)
		.addChannelOption(option =>
			option
				.setName('channel')
				.setDescription('Channel option')
				.setRequired(false),
		)
		.addIntegerOption(option =>
			option
				.setName('integer')
				.setDescription('Integer option')
				.setRequired(false),
		)
		.addRoleOption(option =>
			option
				.setName('role')
				.setDescription('Role option')
				.setRequired(false),
		)
		.addMentionableOption(option =>
			option
				.setName('mentionable')
				.setDescription('Mentionable option')
				.setRequired(false),
		)
		.addAttachmentOption(option =>
			option
				.setName('attachment')
				.setDescription('Attachment option')
				.setRequired(false),
		),
	async execute(interaction) {
		if (interaction.guild.members.me.permissions.has(botPerms)) {
			const cmdopts = {
				'text': interaction.options.getString('text'),
				'number': interaction.options.getNumber('number'),
				'boolean': interaction.options.getBoolean('boolean'),
				'user': interaction.options.getUser('user') === '' ? '' : interaction.options.getUser('user'),
				'channel': interaction.options.getChannel('channel') === '' ? '' : interaction.options.getChannel('channel'),
				'integer': interaction.options.getInteger('integer') === 0 ? '' : interaction.options.getInteger('integer'),
				'role': interaction.options.getRole('role') === '' ? '' : interaction.options.getRole('role'),
				'mentionable': interaction.options.getMentionable('mentionable') === '' ? '' : interaction.options.getMentionable('mentionable'),
				'attachment': interaction.options.getAttachment('attachment') === null ? '' : interaction.options.getAttachment('attachment'),
			};
			interaction.reply(`Text: ${cmdopts['text']}\nNumber: ${cmdopts['number']}\nBoolean: ${cmdopts['boolean']}\nUser: ${cmdopts['boolean']}\nChannel: ${cmdopts['channel']}\nInteger: ${cmdopts['integer']}\nRole: ${cmdopts['role']}\n Mentionable: ${cmdopts['mentionable']}\n Attachment: ${cmdopts['attachment']}`);
		}
	},
};