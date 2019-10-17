const mongoose = require('mongoose');
const { model: FlossList } = require('./flossList.model');

// Nice clean services! Great job!
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
    // if the populate() stops working, it might be that the .exec() needs to be chained on after it
    return await FlossList.findOne({ _id: listObjectId }).populate('flossList');
  } catch (e) {
    throw e;
  }
};

exports.getLists = async () => {
  try {
    return await FlossList.find().populate('flossList');
  } catch (e) {
    throw e;
  }
};

exports.getListsByUser = async user => {
  try {
    return await FlossList.find({ user }).populate('flossList');
  } catch (e) {
    throw e;
  }
};

exports.updateList = async (listId, newListData) => {
  // Love all the comments!
  // frontend should be sending entire flossList if updated in newListData, i.e., with the updates
  const list = await FlossList.findById(listId);
  list.set(newListData);
  return await list.save();
};

exports.deleteList = () => {};
