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

exports.updateList = async (listId, newListData) => {
  const foundList = await FlossList.findById(listId);
  console.log('found list', foundList);
  for (let key in newListData) {
    // TODO: update each foundList[key] with newListData[key]
    // make sure frontend is sending entire list, i.e., with the updates
    console.log(key, listData[key]);
  }
  return 'hi';
};

exports.updateFlossList = () => {};

exports.deleteList = () => {};
