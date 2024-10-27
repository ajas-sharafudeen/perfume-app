const mongoose = require('mongoose');
const crypto = require('crypto');

const UserSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, select: false }, // Temporarily store plain password for hashing
    hash: { type: String },
    salt: { type: String },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

// Pre-save hook to hash password before saving
UserSchema.pre('save', function (next) {
  // Only hash if password is provided or changed
  if (!this.isModified('password')) return next();

  // Generate salt and hash password
  this.salt = crypto.randomBytes(16).toString('hex');
  this.hash = crypto
    .pbkdf2Sync(this.password, this.salt, 1000, 64, 'sha256')
    .toString('hex');

  // Remove plain password after hashing
  this.password = undefined;
  next();
});

// Method to verify password
UserSchema.methods.verifyPassword = function (password) {
  const hash = crypto
    .pbkdf2Sync(password, this.salt, 1000, 64, 'sha256')
    .toString('hex');
  return this.hash === hash;
};

module.exports = mongoose.model('User', UserSchema);
