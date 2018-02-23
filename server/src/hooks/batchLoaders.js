const BatchLoader = require('@feathers-plus/batch-loader');
const { getUniqueKeys, getResultsByKey } = BatchLoader;

/*
 **** BATCH LOADER FUNCTIONS ****
*/
const getUsersUsingIds = (hook) => {
  return async (ids) => {
    const userService = hook.app.service('users');
    let idArray = getUniqueKeys(ids);
    let getRecordKeyFunc = user => user.id;

    let response = await userService.find({ query: { id: { $in: idArray }, $select: ['id', 'email', 'avatar'] } });
    let results = getResultsByKey(idArray, response.data, getRecordKeyFunc, '!');
    return results;
  };
};


/*
 **** BATCH LOADERS ****
*/
const userLoader = (hook) => new BatchLoader(getUsersUsingIds(hook));

module.exports = {
  userLoader,
};