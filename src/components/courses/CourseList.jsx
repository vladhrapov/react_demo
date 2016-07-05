import React, {PropTypes} from "react";
import CourseItem from "./CourseItem";

class CourseList extends React.Component {
  constructor() {
    super();

    this.renderCourses = this.renderCourses.bind(this);
  }

  renderCourses() {
    return this.props.courses.map((course, index) => {
      return <CourseItem key={index} course={course} />
    });
  }

  render() {
    return (
      <table className="table">
        <thead>
        <tr>
          <th>&nbsp;</th>
          <th>Title</th>
          <th>Author</th>
          <th>Category</th>
          <th>Length</th>
        </tr>
        </thead>
        <tbody>
          {this.renderCourses()}
        </tbody>
      </table>
    );
  }
}

CourseList.PropTypes = {
  courses: PropTypes.array.isRequired
}

export default CourseList;
