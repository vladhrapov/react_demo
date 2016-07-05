import Types from "../constants/ActionTypes";
import courseMockApi from "../api/mockCourseApi";

export function createCourse(course) {
  return {
    type: Types.CREATE_COURSE,
    course
  };
}

export function loadCoursesSuccess(courses) {
  return {
    type: Types.LOAD_COURSES_SUCCESS,
    courses
  }
}

export function loadCourses() {
  return dispatch => {
    return courseMockApi.getAllCourses()
    .then(courses => {
      dispatch(loadCoursesSuccess(courses))
    })
    .catch(error => {
      //throw new Error("Failed load the courses");
    });
  }
}
