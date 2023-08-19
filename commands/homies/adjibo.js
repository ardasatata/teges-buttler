const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const config = require('../../config');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('adjibo')
        .setDescription('Kompilasi adjibo 💦'),
    async execute(interaction) {
        await interaction.reply('Server dinyalakan');
        try {

            const embed = new EmbedBuilder()
                .setColor('#0099ff')
                .setTitle('Adjibo`s compilation')
                .setImage(config.ADJIBO_GIFS);


            await interaction.followUp({ embeds: [embed] });

        }
        catch (error) {
            console.error('Error GET:', error);
            await interaction.followUp(
                'adjibo`s video can`t be sent this time :(',
            );
        }
    },
};