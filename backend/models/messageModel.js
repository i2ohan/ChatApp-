const mongoose = require("mongoose");
const fs = require("fs");


fs.readFile("../../A.txt", (err, buff) => {
  // if any error
  if (err) {
    console.error(err);
    return;
  }

  content = buff.toString();


});

const messageSchema = mongoose.Schema(
  {
    sender: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    content: { type: String, trim: true },
    chat: { type: mongoose.Schema.Types.ObjectId, ref: "Chat" },
    readBy: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  },
  { timestamps: true }
);

const Message = mongoose.model("Message", messageSchema);
module.exports = Message;
