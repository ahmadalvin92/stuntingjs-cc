const User = require("../models/userModel");
const bcrypt = require("bcrypt");

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findByEmail(email);
    if (user && bcrypt.compareSync(password, user.password)) {
      // Set session user
      req.session.user = {
        email: user.email,
        name: user.name,
        phone: user.phone,
        address: user.address,
      };
      res.json({
        email: user.email,
        name: user.name,
        phone: user.phone,
        address: user.address,
      });
    } else {
      res.status(401).json({ message: "Invalid email or password" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.register = async (req, res) => {
  const { email, password, name, role } = req.body;
  try {
    const hashedPassword = bcrypt.hashSync(password, 10);
    const userId = await User.create({
      email,
      password: hashedPassword,
      name,
      role,
    });
    res.json({ message: "User registered successfully", userId });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateProfile = async (req, res) => {
  const { email, password, name, phone, address, new_password } = req.body;
  try {
    const user = await User.findByEmail(email);
    if (user && bcrypt.compareSync(password, user.password)) {
      const updatedData = { name, phone, address };
      if (new_password) {
        updatedData.password = bcrypt.hashSync(new_password, 10);
      }
      await User.update(email, updatedData);
      res.json({ message: "Profile updated successfully" });
    } else {
      res.status(401).json({ message: "Invalid email or password" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
