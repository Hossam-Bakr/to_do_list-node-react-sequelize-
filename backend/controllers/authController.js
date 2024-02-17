const User = require("../models/UserModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.login = async (req, res) => {
  const user = await User.findOne({
    where: { email: req.body.email },
  });
  if (!user) {
    return res.status(401).send({ message: "Authentication failed" });
  }

  const match = await bcrypt.compare(req.body.password, user.password);
  if (match) {
    const token = jwt.sign(
      { userId: user.id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    const { password, ...userWithoutPassword } = user.dataValues;

    return res.status(200).send({
      status: "Success",
      message: "Authentication successfully",
      user: userWithoutPassword,
      token,
    });
  } else {
    return res.status(401).send({ message: "Authentication failed" });
  }
};

exports.signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(409).json({ message: "Email already in use" });
    }
    const user = await User.create({ name, email, password });
    res.status(201).json({
      status: "Success",
      message: "User created successfully",
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to create user", error: error.message });
  }
};

exports.logout = async (req, res) => {
  res.status(200).send({
    status: "Success",
    message:
      "You have been logged out successfully.",
  });
};
