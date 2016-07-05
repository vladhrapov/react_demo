import React, {PropTypes} from 'react';
import TextInput from '../shared/TextInput';
import SelectInput from '../shared/SelectInput';

class CourseForm extends React.Component {
  constructor() {
    super();

  }

  render() {
    const {course, errors, allAuthors, saving, onChange, onSave} = this.props;

    return (
      <form>
        <TextInput
          name="title"
          label="Title"
          value={course.title}
          onChange={onChange}
          error={errors.title}
          placeholder="Enter title"
        />

        <SelectInput
          name="authorId"
          label="Author"
          value={course.authorId}
          defaultOption="Select Author"
          options={allAuthors}
          onChange={onChange} error={errors.authorId}/>

        <TextInput
          name="category"
          label="Category"
          value={course.category}
          onChange={onChange}
          error={errors.category}
          placeholder="Enter category"
        />

        <TextInput
          name="length"
          label="Length"
          value={course.length}
          onChange={onChange}
          error={errors.length}
          placeholder="Enter length"
        />

        <input
          type="submit"
          disabled={saving}
          value={saving ? 'Saving...' : 'Save'}
          className="btn btn-primary"
          onClick={onSave}/>
      </form>
    );

  }
}

CourseForm.propTypes = {
  course: PropTypes.object.isRequired,
  allAuthors: PropTypes.array.isRequired,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  saving: PropTypes.bool,
  errors: PropTypes.object
};

export default CourseForm;
