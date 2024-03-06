const { ChatInputCommandInteraction, SlashCommandBuilder } = require('discord.js');
const ExtendedClient = require('../../../class/ExtendedClient');

module.exports = {
    structure: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Pings to discord api to show this bot latency'),
    /**
     * @param {ExtendedClient} client 
     * @param {ChatInputCommandInteraction} interaction 
     */
    run: async (client, interaction) => {
        let msg = await interaction.reply(`Pinging..`);
        setTimeout(() => {
            msg.edit(`${Math.round(client.ws.ping)}ms | RT: ${msg.createdTimestamp - interaction.createdTimestamp}\n\n> **I am on Shard: \` 0\`**`);
          }, 500);

    }
};

// User:

