const { ChatInputCommandInteraction, SlashCommandBuilder, ModalBuilder, ActionRowBuilder, TextInputBuilder, TextInputStyle } = require('discord.js');
const ExtendedClient = require('../../../class/ExtendedClient');

module.exports = {
    structure: new SlashCommandBuilder()
        .setName('monitor-add')
        .setDescription('Add your repl link to my database!'),
        
    /**
     * @param {ExtendedClient} client 
     * @param {ChatInputCommandInteraction} interaction 
     */
    run: async (client, interaction) => {
        const modal = new ModalBuilder()
        .setTitle('Uptimer Link')
        .setCustomId('link')
        .addComponents(
            new ActionRowBuilder()
                .addComponents(
                    new TextInputBuilder()
                        .setLabel('Link')
                        .setCustomId('link')
                        .setPlaceholder('Type the repl link!')
                        .setStyle(TextInputStyle.Short)
                        .setRequired(true),
                       
                )
            
        );

    await interaction.showModal(modal);
    }
};