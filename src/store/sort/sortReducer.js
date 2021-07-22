import { SORT } from "./sortActions";

const initialState = {
  sortBy: null,
};

const sortReducer = (state = initialState, action) => {
  switch (action.type) {
    case SORT: {
      return {
        ...state,
        sortBy: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default sortReducer;
