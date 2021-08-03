'use strict';

// dependencies
const mongoose = require("mongoose");
const { Schema } = mongoose;
const slug = require("mongoose-slug-generator");
const mongoose_delete = require("mongoose-delete");


// create schema
const Users = new Schema({
  email: { type: String, unique: true, required: true, trim: true, lowercase: true, },
  phone: { type: String, unique: true, required: true, trim: true, lowercase: true, },
  password: { type: String, minlength: 8, trim: true, },
  name: { type: String, default: '', trim: true, required: true, },
  gender: { type: String, enum: ['male', 'female', 'another'], required: true, trim: true, lowercase: true, },
}, { timestamps: true });



module.exports = mongoose.model("user", Users);