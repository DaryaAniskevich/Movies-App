import { SORT_ORDER } from "./sortOrderActions";

const initialState = {
  sortOrder: "asc",
};

const sortOrderReducer = (state = initialState, action) => {
  switch (action.type) {
    case SORT_ORDER: {
      return {
        ...state,
        sortOrder: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default sortOrderReducer;
