const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const api = require('../../api/memes/base-api');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('meme')
        .setDescription('meme for homies'),
    async execute(interaction) {
        await interaction.reply('<:monkaS:597407097638092802>');
        try {
            const response = await api.get('https://api.imgflip.com/get_memes');

            if (response.success) {
                const randomMemeIndex = Math.floor(
                    Math.random() * response.data.memes.length,
                );
                const randomMeme = response.data.memes[randomMemeIndex];

                const embed = new EmbedBuilder()
                    .setColor('#0099ff')
                    .setTitle('meme served <:aryPing:625632187365982228>')
                    .setImage(randomMeme.url);

                await interaction.followUp({ embeds: [embed] });
            }
        }
        catch (error) {
            console.error('Error GET:', error);
            await interaction.followUp(
                'no meme for homies today <:aripbait:856071246060191774>',
            );
        }
    },
};