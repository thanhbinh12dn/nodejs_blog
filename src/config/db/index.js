const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/nodejs_blog_dev");
    console.log("Connect successfully");
  } catch (error) {
    console.log("Fail connect");
  }
}

module.exports = { connect };
