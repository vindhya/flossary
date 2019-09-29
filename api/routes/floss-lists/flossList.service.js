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

exports.getLists = async () => {
  try {
    return await FlossList.find();
  } catch (e) {
    throw e;
  }
};

exports.getListsByUser = async user => {
  try {
    return await FlossList.find({ user });
  } catch (e) {
    throw e;
  }
};

exports.updateList = async (listId, newListData) => {
  // frontend should be sending entire flossList if updated in newListData, i.e., with the updates
  const list = await FlossList.findById(listId);
  list.set(newListData);
  return await list.save();
};

exports.deleteList = () => {};
