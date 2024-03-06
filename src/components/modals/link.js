const { ModalSubmitInteraction, EmbedBuilder } = require('discord.js');
const ExtendedClient = require('../../class/ExtendedClient');
const UrlsConfig = require("../../schemas/urlconfig");
const validUrl = require("valid-url");
const fetch = require("node-fetch")

module.exports = {
    customId: 'link',
    /**
     * 
     * @param {ExtendedClient} client 
     * @param {ModalSubmitInteraction} interaction 
     */
    run: async (client, interaction) => {
      await interaction.reply("Please Wait while im adding your link to my database")
      
      const url = interaction.fields.getTextInputValue("link")
      if (!validUrl.isUri(url)) {
        return interaction.editReply({ content: "Please provide a vaild url Using Its http protocol Example: http:// or https://" });
      }
      var checkIfExsists = await UrlsConfig.findOne({
        projectURL: url,
        
      });
      if (checkIfExsists === null) {
      
        await UrlsConfig.create({
          authorID: interaction.member.user.id,
          projectURL: url,
          pinged: 0,
        }).then(async () => {
          try {
          
            await fetch(url);
          }catch (e){ await UrlsConfig.findOneAndUpdate(
            { projectURL: url },
            { error: true, errorText: e.message },
            { new: true }
          );
        interaction.reply("r")}
        const emb = new EmbedBuilder()
        .setTitle("Successfully added your url to my database!")
        .setTimestamp()
        await interaction.editReply({embeds : [emb] })
          
           
        })} else{
          const emb = new EmbedBuilder()
        .setTitle("This url already exits on my database!")
        .setTimestamp()
        await interaction.editReply({embeds: [emb]})
        }
    }}

    