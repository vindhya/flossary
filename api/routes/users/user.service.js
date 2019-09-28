const { model: User } = require('./user.model');

exports.createUser = async userData => {
  try {
    const user = new User(userData);
    return await user.save();
  } catch (e) {
    throw e;
  }
};

exports.isUser = async ({ email, password }) => {
  try {
    const [user] = await User.find({ email });
    if (user) {
      // how does it know how to compare passwords? we put in 10 salt rounds before?
      const match = await user.comparePassword(password);
      if (match) {
        return user;
      }
    }
  } catch (e) {
    throw e;
  }
};

exports.getUsers = async () => {
  try {
    return await User.find();
  } catch (e) {
    throw e;
  }
};
