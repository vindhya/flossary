const mongoose = require('mongoose');
const { model: FlossList } = require('./flossList.model');

exports.createList = async flossListData => {
  try {
    const list = new FlossList(flossListData);
    return await list.save();
  } catch (e) {
    throw e;
  }
};

exports.getList = async flossListId => {
  try {
    const listObjectId = mongoose.Types.ObjectId(flossListId);
    return await FlossList.findOne({ _id: listObjectId });
  } catch (e) {
    throw e;
  }
};

exports.getLists = async userId => {
  try {
    return await FlossList.find({ userId });
  } catch (e) {
    throw e;
  }
};

exports.updateList = async (listId, newListData) => {
  // frontend should be sending entire flossList if updated in newListData, i.e., with the updates
  const foundList = await FlossList.findById(listId);
  for (let key in newListData) {
    foundList[key] = newListData[key];
  }
  return await foundList.save();
};

exports.deleteList = () => {};
