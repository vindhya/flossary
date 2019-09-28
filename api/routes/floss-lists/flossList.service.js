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
    return await FlossList.find(userId);
  } catch (e) {
    throw e;
  }
};

exports.updateList = () => {};

exports.updateFlossList = () => {};

exports.deleteList = () => {};
