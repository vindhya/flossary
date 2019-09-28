const { model: FlossList } = require('./flossList.model');

exports.getList = async flossListId => {
  try {
    return await FlossList.find({ flossListId });
  } catch (e) {
    throw e;
  }
};

exports.createList = async flossListData => {
  try {
    const list = new FlossList(flossListData);
    return await list.save();
  } catch (e) {
    throw e;
  }
};
