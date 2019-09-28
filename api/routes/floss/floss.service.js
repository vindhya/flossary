const { model: Floss } = require('./floss.model');

exports.getFloss = async flossId => {
  try {
    return await Floss.findOne({ flossId });
  } catch (e) {
    throw e;
  }
};

exports.getAllFloss = async () => {
  try {
    return await Floss.find();
  } catch (e) {
    throw e;
  }
};
