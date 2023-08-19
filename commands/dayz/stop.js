const { SlashCommandBuilder } = require('discord.js');
const { fetchRequest } = require('../../util');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('dayz-stop')
        .setDescription('Wayahe turu!'),
    async execute(interaction) {
        await interaction.deferReply();
        await fetchRequest('stop');
        await interaction.editReply('🔴 Server dimatikan');
    },
};