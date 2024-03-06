const { log } = require("../../functions");
const ExtendedClient = require('../../class/ExtendedClient');
const UrlsConfig = require("../../schemas/urlconfig")
const fetch = require("node-fetch")
module.exports = {
    event: 'ready',
    once: true,
    /**
     * 
     * @param {ExtendedClient} _ 
     * @param {import('discord.js').Client<true>} client 
     * @returns 
     */
    run: (_, client) => {
   
      setInterval(function() {
        UrlsConfig.find({}, function(err, docs) {
        if (err) console.log(err);
        if (!docs) return;
            docs.forEach(docs => {
                    fetch(docs.projectURL);
                    
                  }).catch({ })

        
      
        
      
      })
    
      }, 30000)
      log( "Bot ready!" );
    }}
    
