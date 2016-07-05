import React, {PropTypes} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as CourseActions from "../../actions/CourseActions";
import CourseList from "./CourseList";

class Courses extends React.Component {
  constructor(props, context) {
    super(props, context);

    // this.state = {
    //   course: {
    //     title: ""
    //   }
    // };
    // this.onTitleChange = this.onTitleChange.bind(this);
    // this.onSave = this.onSave.bind(this);
  }

  onTitleChange(event) {
    this.setState({
      course: {
        title: event.target.value
      }
    });
  }

  onSave() {
    console.log("asdasd");
    this.props.actions.createCourse(this.state.course);
  }

  renderCourses() {
    return this.props.courses.map((course, index) => {
      return (
        <p key={index}>{course.title}</p>
      );
    });
  }

  render() {
    return (
      <div>
        <h1>Courses</h1>

        <CourseList courses={this.props.courses} />
      </div>
      // <h2>Add course{this.props.bla}</h2>
    );
    // <input type="text" onChange={this.onTitleChange} value={this.state.course.title}/>
    // <input type="submit" value="Save" onClick={this.onSave}/>
  }
}

function mapStateToProps(state, ownProps) {
  // console.log(state);
  // console.log(ownProps);
  return {
    courses: state.courses
  };
}

function mapDispatchToProps(dispatch) {
  return {
    // createCourse: course => dispatch(CourseActions.createCourse(course))
    // actions: bindActionCreators(CourseActions, dispatch)
  }
}

Courses.propTypes = {
  //dispatch: PropTypes.func.isRequired,
  // createCourse: PropTypes.func.isRequired,
  // actions: PropTypes.object.isRequired,
  courses: PropTypes.array.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Courses);
