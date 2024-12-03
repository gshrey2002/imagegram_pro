import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      minLength: 5,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      minLength: 5,
    },
    password: {
      type: String,
      required: true,
      minLength: 5,
    },
  },
  {
    timestamps: true,
  }
);

// Hash password before saving
userSchema.pre("save", function modifyPassword(next) {
  const user = this;

  if (!user.isModified("password")) {
    return next(); // Skip if the password is not modified
  }

  try {
    const SALT = bcrypt.genSaltSync(9); // Correctly generates the salt
    const hashedPassword = bcrypt.hashSync(user.password, SALT); // Correct usage of hashSync
    user.password = hashedPassword;
    next();
  } catch (err) {
    next(err);
  }
});

const User = mongoose.model("User", userSchema);

export default User;
