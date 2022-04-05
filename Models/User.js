const { Schema, model } = require("mongoose");

const UserSchema = Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  email: {
    type: String,
    required: [true, "Mail is required"],
    unique: true,
  },
  role: {
    type: String,
    required: true,
    enum: ["ADMIN", "USER"],
  },
  image: {
    type: String,
  },
  google: {
    type: Boolean,
  },
  status: {
    type: Boolean,
    default: true,
  },
});

UserSchema.methods.toJSON = function () {
  const { password, __v, _id, ...user } = this.toObject();
  return {...user, uid:_id};
};

module.exports = model("User", UserSchema);
