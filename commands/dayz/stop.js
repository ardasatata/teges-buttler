const { SlashCommandBuilder } = require('discord.js');
const { fetchRequest } = require('../../util');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('dayz-stop')
        .setDescription('Wayahe turu!'),
    async execute(interaction) {
        await interaction.reply('Server dimatikan');
        await fetchRequest('stop');
    },
};