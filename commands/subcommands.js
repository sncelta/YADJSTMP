/* eslint-disable indent */
/* eslint-disable quotes */
/* eslint-disable no-mixed-spaces-and-tabs */
const { SlashCommandBuilder, ChannelType, PermissionFlagsBits } = require('discord.js');

// Make a slash command with a subcommand that sends message to a text channel, both specifed by the user.

module.exports = {
    data: new SlashCommandBuilder()
    .setName('say')
    .setDescription('Make bot say anything the executor wants')
    .addSubcommand(subcommand =>
        subcommand
            .setName('channel')
            .setDescription('Sends custom message in specified channel')
            .addStringOption(option =>
                option
                    .setName('text')
                    .setDescription("Message to be sent in specified channel")
                    .setRequired(true),
            )
            .addChannelOption(option =>
                option
                    .setName('target_channel')
                    .setDescription('Channel to send message in.')
                    // Display only text channels to select
                    .addChannelTypes(ChannelType.GuildText)
                    .setRequired(true),
            )
    // Make the command be able to executed only if the executor has "Manage Messages" permisson.
    .setDefaultMemberPermissions(PermissionFlagsBits.ManageMessages),
    ),
	async execute(interaction) {
		// Parse user's given channel and set it to a const variable.
		const channel = interaction.options.getChannel('target_channel');
        const text = interaction.options.getString('text');

        interaction.guild.channels.cache.get(channel.id).send(text);
        interaction.reply('Done!');
	},
};