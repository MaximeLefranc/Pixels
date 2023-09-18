/**
 * Remove with this id one user on array of users
 * @param {[]} array
 * @param {Number} id
 * @returns {[]} usersArray
 */
export const removeUserWithId = (array, id) => {
  const objWithIdIndex = array.findIndex((obj) => parseInt(obj.id) === id);

  if (objWithIdIndex > -1) {
    array.splice(objWithIdIndex, 1);
  }

  return array;
};
