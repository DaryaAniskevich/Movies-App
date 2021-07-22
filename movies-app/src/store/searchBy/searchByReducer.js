import { SEARCH_BY } from "./searchByActions";

const initialState = {
  searchBy: "title",
};
const searchByReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_BY: {
      return {
        ...state,
        searchBy: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default searchByReducer;
