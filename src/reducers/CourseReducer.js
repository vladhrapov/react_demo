import Types from "../constants/ActionTypes";

export default function courseReducer(state = [], action) {
  switch (action.type) {
    case Types.CREATE_COURSE:
      return [
        ...state,
        Object.assign({}, action.course)
      ];
    default:
      return state;

  }
}
