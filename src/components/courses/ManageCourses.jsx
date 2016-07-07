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

  onSave(event) {
    event.preventDefault();
    console.log(this.state.course);
    this.props.actions.saveCourse(this.state.course).then(() => {
      browserHistory.push("/courses");
    });
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
  // console.log(ownProps);
  let course = {id: "", watchRef: "", title: "", authorId: "", length: "", category: ""};

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

export default connect(mapStateToProps, mapDispatchToProps)(ManageCourses);
