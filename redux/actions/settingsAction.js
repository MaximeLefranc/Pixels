/*=====================================
============ACTIONS TYPES==============
=======================================*/

export const SET_CATEGORIES_SETTINGS = 'SET_CATEGORIES_SETTINGS';

/*=====================================
===========ACTIONS CREATORS============
=======================================*/

/**
 * Save in state the user settings
 * @param {{}} savedSettings
 * @returns {{}} Action Object
 */
export const actionSetCategoriesSettings = (savedSettings) => {
  return {
    type: SET_CATEGORIES_SETTINGS,
    payload: savedSettings,
  };
};
