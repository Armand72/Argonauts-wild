const mongoose = require("mongoose");

const MembersSchema = new mongoose.Schema({
  member: {
    type: String,
    required: true,
  },
});

module.exports = Members = mongoose.model("members", MembersSchema);
