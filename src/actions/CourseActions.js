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

export function createCourseSuccess(course) {
  return {
    type: Types.CREATE_COURSE_SUCCESS,
    course
  }
}

export function updateCourseSuccess(course) {
  return {
    type: Types.UPDATE_COURSE_SUCCESS,
    course
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

export function saveCourse(course) {
  // getState (optional)
  // need for getting some pieces of state
  // and do not pass them to saveCourse(...)
  return (dispatch, getState) => {
    return courseMockApi.saveCourse(course).then(course => {
      course.id ? dispatch(updateCourseSuccess(course)) : dispatch(createCourseSuccess(course));
    }).catch(error => {
      throw(error);
    });
  };
}
