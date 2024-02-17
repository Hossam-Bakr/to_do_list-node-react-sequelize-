const jwt = require("jsonwebtoken");
const User = require("../models/UserModel");

const authenticate = async (req, res, next) => {
  try {
    let token;
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
    }

    if (!token)
      return next(
        new ApiError("You are not logged in! Please log in to get access.", 401)
      );

    // Verification token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findOne({ where: { email: decoded.email } });

    if (!user)
      return next(new ApiError("This account does no longer exist.", 404));

    if (user) {
      req.user = decoded;
    }
    next();
  } catch (error) {
    return res.status(401).json({ message: "Authentication failed" });
  }
};

module.exports = authenticate;
