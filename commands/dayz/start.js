const { SlashCommandBuilder } = require('discord.js');
const { fetchRequest } = require('../../util');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('dayz-start')
        .setDescription('Awas zombie galak!'),
    async execute(interaction) {
        await interaction.reply('Server dinyalakan');
        await fetchRequest('start');
    },
};