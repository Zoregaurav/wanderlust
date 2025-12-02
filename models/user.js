const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,     // ✅ Use capital S
    required: true,
    unique: true      // optional but recommended
  }
});

// ✅ Apply plugin to schema (not model)
userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);
