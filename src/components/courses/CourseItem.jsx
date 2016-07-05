import React, {PropTypes} from "react";
import {Link} from "react-router";

class CourseItem extends React.Component {
  constructor() {
    super();

  }

  render() {
    const {course} = this.props;

    return (
      <tr>
        <td><a href={course.watchHref} target="_blank">Watch</a></td>
        <td><Link to={'/courses/' + course.id}>{course.title}</Link></td>
        <td>{course.authorId}</td>
        <td>{course.category}</td>
        <td>{course.length}</td>
      </tr>
    );
    // <td>-</td>
    // <td>-</td>
  }
}

CourseItem.PropTypes = {
  course: PropTypes.object.isRequired
}

export default CourseItem;
