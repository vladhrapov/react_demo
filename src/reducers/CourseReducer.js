import Types from "../constants/ActionTypes";
import InitialState from "./InitialState";

export default function courseReducer(state = InitialState.courses, action) {
  switch (action.type) {
    case Types.CREATE_COURSE:
      return [
        ...state,
        Object.assign({}, action.course)
      ];
    case Types.LOAD_COURSES_SUCCESS:
      // console.log(" action.courses: ", action.courses);
      return action.courses;//Object.assign({}, action.courses);
    default:
      return state;

  }
}
