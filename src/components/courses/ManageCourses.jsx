import React, {PropTypes} from "react";
import {browserHistory} from "react-router";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as CourseActions from "../../actions/CourseActions";
import CourseForm from "./CourseForm";

class ManageCourses extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      course: Object.assign({}, this.props.course),
      errors: {
        title: ""
      }
    }


    this.onSave = this.onSave.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  static getCourseById(courses, courseId) {
    const course = courses.filter(course => course.id == courseId);
    if (course) {
      return course[0];
    }
    return null;
  }

  componentWillReceiveProps(nextProps) {
    // console.log(nextProps.course);
    if (this.props.course.id != nextProps.course.id) {
      this.setState({
        course: Object.assign({}, nextProps.course)
      });
    }
  }

  onSave(event) {
    event.preventDefault();
    console.log(this.state.course);
    // console.log("this.context", this.context, " this.props", this.props);
    // Case 1
    // this.props.actions.saveCourse(this.state.course).then(() => {
    //   browserHistory.push("/courses");
    // });

    // Case 2
    // Can rewrite top row like this because of ManageCourses.contextTypes
    this.props.actions.saveCourse(this.state.course);
    this.context.router.push("/courses");
  }

  onChange(event) {
    const field = event.target.name;
    let course = this.state.course;
    course[field] = event.target.value;
    return this.setState({ course: course });
  }

  render() {

    return (
      <div>
        <h1>Manage Courses</h1>
        <CourseForm
          allAuthors={this.props.authors}
          course={this.state.course}
          errors={this.state.errors}
          onSave={this.onSave}
          onChange={this.onChange}
          saving={false}
        />
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  // console.log(state);
  console.log("ownProps: ", ownProps);
  const courseId = ownProps.params.id;
  let course = {id: "", watchRef: "", title: "", authorId: "", length: "", category: ""};

  if (courseId && state.courses.length) {
    course = ManageCourses.getCourseById(state.courses, courseId);
  }

  const authorsDropdownFormatted = state.authors.map(author => {
    return {
      value: author.id,
      text: author.firstName + " " + author.lastName
    };
  });

  return {
    course: course,
    authors: authorsDropdownFormatted
  };
}

function mapDispatchToProps(dispatch) {
  return {
    // createCourse: course => dispatch(CourseActions.createCourse(course))
    actions: bindActionCreators(CourseActions, dispatch)
  }
}

ManageCourses.propTypes = {
  //dispatch: PropTypes.func.isRequired,
  // createCourse: PropTypes.func.isRequired,
  actions: PropTypes.object.isRequired,
  course: PropTypes.object.isRequired,
  authors: PropTypes.array.isRequired,
  errors: PropTypes.object
};

// pull react router to this.context.router
// may be useful for testing
ManageCourses.contextTypes = {
  router: PropTypes.object
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCourses);
