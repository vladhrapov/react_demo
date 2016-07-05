import Types from "../constants/ActionTypes";
import InitialState from "./InitialState";

export default function authorReducer(state = InitialState.authors, action) {
  switch (action.type) {
    case Types.LOAD_AUTHORS_SUCCESS:
      // console.log(" action.courses: ", action.courses);
      return  action.authors;//Object.assign({}, action.courses);
    default:
      return state;

  }
}
