const mongoose = require("mongoose");

const url = "mongodb://localhost:27017/todoNew";
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

module.exports = mongoose;
