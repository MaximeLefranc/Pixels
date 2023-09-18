/*=====================================
============ACTIONS TYPES==============
=======================================*/

export const USER_SELECTION = 'USER_SELECTION';
export const USER_UNSELECTION = 'USER_UNSELECTION';

/*=====================================
===========ACTIONS CREATORS============
=======================================*/

/**
 * Select a User by user ID
 * @param {number} selectedUserID
 * @returns Object Action
 */
export const actionUserSelection = (selectedUserID) => {
  return {
    type: USER_SELECTION,
    payload: selectedUserID,
  };
};

/**
 * Unselect a User by user ID
 * @param {number} userIDToUnselect
 * @returns Object Action
 */
export const actionUserUnselection = (userIDToUnselect) => {
  return {
    type: USER_UNSELECTION,
    payload: userIDToUnselect,
  };
};
