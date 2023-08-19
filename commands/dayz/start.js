const { SlashCommandBuilder } = require('discord.js');
const { fetchRequest } = require('../../util');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('dayz-start')
        .setDescription('Awas zombie galak!'),
    async execute(interaction) {
        await interaction.deferReply();
        await fetchRequest('start');
        await interaction.editReply('🟢 Server dinyalakan');
    },
};