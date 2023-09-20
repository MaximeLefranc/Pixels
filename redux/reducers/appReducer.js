import { DATA } from '../../data/usersData';
import { removeUserWithId } from '../../selectors/userSelectors';
import { SET_CATEGORIES_SETTINGS } from '../actions/settingsAction';
import { USER_SELECTION, USER_UNSELECTION } from '../actions/usersActions';

const initialState = {
  users: DATA,
  selectedUsers: [],
  selectedCategories: DATA,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_SELECTION: {
      const newUserSelected = state.users.find(
        (user) => parseInt(user.id) === action.payload
      );
      return {
        ...state,
        selectedUsers: [newUserSelected, ...state.selectedUsers],
      };
    }
    case USER_UNSELECTION: {
      const newUserSelected = removeUserWithId(
        state.selectedUsers,
        action.payload
      );
      return {
        ...state,
        selectedUsers: [...newUserSelected],
      };
    }
    case SET_CATEGORIES_SETTINGS: {
      const usedSettings = action.payload;
      const selectedUsersByCategory = state.users.filter((user) => {
        if (usedSettings.animals && user.category === 'animals') {
          return true;
        }
        if (usedSettings.travels && user.category === 'travel') {
          return true;
        }
        if (usedSettings.cars && user.category === 'cars') {
          return true;
        }
      });
      return {
        ...state,
        selectedCategories: selectedUsersByCategory,
      };
    }

    default:
      return state;
  }
};

export default appReducer;
