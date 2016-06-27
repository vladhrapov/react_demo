import Types from "../constants/ActionTypes";

export function createCourse(course) {
  return {
    type: Types.CREATE_COURSE,
    course
  };
}
