/* eslint-disable indent */
/* eslint-disable quotes */
/* eslint-disable no-mixed-spaces-and-tabs */
const { SlashCommandBuilder, ChannelType, PermissionFlagsBits } = require('discord.js');

// Make a slash command with a subcommand that sends message to a text channel, both specifed by the user.

const botPerms =
    PermissionFlagsBits.ManageMessages;

module.exports = {
    data: new SlashCommandBuilder()
    .setName('say')
    .setDescription('Make bot say anything the executor wants')
    // Make the command be able to executed only if the executor has botPerms permisson/s.
    .setDefaultMemberPermissions(botPerms)
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
            .addBooleanOption(option =>
                option
                    .setName('log')
                    .setDescription('If the response should contain information about executed command\nOptional.')
                    .setRequired(true),
                    )
            .addChannelOption(option =>
                option
                    .setName('target_channel')
                    .setDescription('Channel to send message in.')
                    // Display only text channels to select
                    .addChannelTypes(ChannelType.GuildText)
                    .setRequired(true),
            ),
    ),
	async execute(interaction) {
		// Parse user's given channel and set it to a const variable.

        if (interaction.guild.members.me.permissions.has(botPerms)) {
		    const channel = interaction.options.getChannel('target_channel');
            const text = interaction.options.getString('text');
            const log_bool = interaction.options.getBoolean('log');

            interaction.guild.channels.cache.get(channel.id).send(text);

            if (log_bool === true) {
                interaction.reply(`Message: ${text}\nChannel (target_channel): ${channel}\nExecutor (User): ${interaction.user}`);
            }
            else {
                interaction.reply('');
            }
        }
        else {
            interaction.reply('``Manage Messages`` permission is required to use this command.\nRe-invite the bot with required permission/s.');
        }
	},
};