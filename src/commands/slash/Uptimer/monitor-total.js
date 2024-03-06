
const { ChatInputCommandInteraction, SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const ExtendedClient = require('../../../class/ExtendedClient');
const UrlsConfig = require("../../../schemas/urlconfig")
module.exports = {
    structure: new SlashCommandBuilder()
        .setName('monitor-total')
        .setDescription('see your total projects, i will send it in your dms!'),
    /**
     * @param {ExtendedClient} client 
     * @param {ChatInputCommandInteraction} interaction 
     */
    run: async (client, interaction) => {
        await interaction.reply("Sending to your DM")
        const filter = {
            authorID: interaction.member.user.id,
          };
          let content = [];

          const all = await UrlsConfig.find(filter); 
          var embed = new EmbedBuilder()
          .setTitle("Your projects")
          .setTimestamp()
          var count = 0
          all.forEach(async(data) =>{
            count++;
            content.push(`**${count}**. \`${data.projectURL}\``)
          })
          if (content.length === 0){
            embed.setDescription("You dont have projects added! add one by using /monitor-add")

          }else{
            embed.setDescription(content.join("\n"))
            
            interaction.editReply("Sent it to your dm!")
            

          }
          embed.setTimestamp()
          var errors = false;
          await interaction.member.user.send({ embeds: [embed] }).catch((err) => {
            errors = true;
            if (err.message === "Cannot send messages to this user") {        
              return interaction.editReply({ content: `Error: \`Cannot send message to you. please turn on your Dms\`.` });
            }
          });
    }
};