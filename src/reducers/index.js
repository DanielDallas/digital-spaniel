import { combineReducers } from "redux";

const initialState = {
  activeTab: "all",
};

const tabReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_ACTIVE_TAB":
      return {
        ...state,
        activeTab: action.payload,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  tab: tabReducer,
});

export default rootReducer;
