require('dotenv').config();
const ExtendedClient = require('./class/ExtendedClient');
const UrlsConfig = require('./schemas/urlconfig.js')
const client = new ExtendedClient();

client.start();

// Handles errors and avoids crashes, better to not remove them.
process.on('unhandledRejection', console.error);
process.on('uncaughtException', console.error);