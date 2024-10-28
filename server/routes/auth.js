const router = require('express').Router();
const User = require('../models/User');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');

// Hashing function for checking passwords
function verifyPassword(password, salt, hash) {
  const hashedPassword = crypto
    .pbkdf2Sync(password, salt, 1000, 64, 'sha256')
    .toString('hex');
  return hashedPassword === hash;
}

// REGISTER
router.post('/register', async (req, res) => {
  try {
    // Create a new user instance with username and email
    // Password will be hashed automatically by the pre-save hook
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    const savedUser = await newUser.save();

    // Exclude the hash and salt fields from the response
    const { hash, salt, ...others } = savedUser._doc;
    res.status(200).json(others);
  } catch (error) {
    res.status(500).json(error);
  }
});

// LOGIN
router.post('/login', async (req, res) => {
  try {
    // Retrieve user details from the database
    const user = await User.findOne({ username: req.body.username });

    // Check if user exists
    if (!user) return res.status(401).json('Wrong credentials!');

    // Validate password by hashing the input password with the stored salt
    const isValidPassword = verifyPassword(
      req.body.password,
      user.salt,
      user.hash
    );
    if (!isValidPassword) {
      return res.status(401).json('Wrong credentials!');
    }

    const accessToken = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_SECRET,
      { expiresIn: '3d' }
    );

    // Exclude password-related fields before sending the response
    const { salt, hash, ...others } = user._doc;
    res.status(200).json({ ...others, accessToken });
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
