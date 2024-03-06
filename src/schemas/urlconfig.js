const mongoose = require("mongoose");

const UrlsConfig = new mongoose.Schema(
  {
    authorID: {
      type: mongoose.SchemaTypes.String,
      required: true,
      unique: false,
    },
    projectURL: {
      type: mongoose.SchemaTypes.String,
      required: true,
      unique: true,
    },
    pinged: {
      type: mongoose.SchemaTypes.Number,
      required: true,
      default: 0,
    },
    error: {
      type: mongoose.SchemaTypes.Boolean,
      required: false,
      default: false,
    },
    errorText: {
      type: mongoose.SchemaTypes.String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("UrlsConfig", UrlsConfig);
/* Code Licensed By Space Development
* Copyright © Space Development 2022-2023
* Removing Of This Credit And License Is Resulted As Code Pirating
* Please Give Us A Little Credit to as a hard work
* Dont be a skidder :)
*/