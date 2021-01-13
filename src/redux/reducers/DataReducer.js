import {GET_DATA, GET_DATA_SUCCESS} from '../actions/types';

const INITIAL_STATE = {
  data: null,
  loading: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_DATA:
      return {
        ...state,
        loading: true,
      };

    case GET_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};
