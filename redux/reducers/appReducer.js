import { DATA } from '../../data/usersData';
import { removeUserWithId } from '../../selectors/userSelectors';
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
    case USER_UNSELECTION:
      return {
        ...state,
        selectedUsers: removeUserWithId(state.selectedUsers, action.payload),
      };

    default:
      return state;
  }
};

export default appReducer;
