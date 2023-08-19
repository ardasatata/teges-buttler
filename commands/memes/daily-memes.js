const { SlashCommandBuilder } = require("discord.js");
const { default: api } = require("../../api/memes/base-api");

const getMemeCommand = {
  data: new SlashCommandBuilder()
    .setName("meme")
    .setDescription("meme for homies"),
  async execute(interaction) {
    await interaction.reply("<:monkaS:597407097638092802>");
    try {
      const response = await api.get("https://api.imgflip.com/get_memes");

      if (response.success) {
        const randomMemeIndex = Math.floor(
          Math.random() * response.data.memes.length
        );
        const randomMeme = response.data.memes[randomMemeIndex];

        const embed = new Discord.MessageEmbed()
          .setColor("#0099ff")
          .setTitle("meme served <:aryPing:625632187365982228>")
          .setImage(randomMeme.url);

        await interaction.followUp({ embeds: [embed] });
      } else {
        await interaction.followUp(
          "no meme for homies today <:aripbait:856071246060191774>"
        );
      }
    } catch (error) {
      console.error("Error GET:", error);
      await interaction.followUp(
        "no meme for homies today <:aripbait:856071246060191774>"
      );
    }
  },
};

export default getMemeCommand;
