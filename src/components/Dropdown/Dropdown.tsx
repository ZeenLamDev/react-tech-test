import React, { FC, useMemo, useState } from 'react';
import courseData from '../../data/courses.json';
import { Container } from './dropdown.styles';

const Dropdown: FC<{
  setValue: React.Dispatch<React.SetStateAction<string>>;
}> = ({ setValue }) => {
  const courses = courseData;
  const options = useMemo(() => {
    const courseTypes = courses.reduce((all, course) => {
      return {
        ...all,
        [course['course-type']]: true,
      };
    }, {});
    return ['Please select', ...Object.keys(courseTypes)];
  }, [courses]);

  return (
    <Container>
      <label>Course Type</label>
      <select
        onChange={(event) => {
          if (event.target.value === 'Please select') {
            setValue('');
            return;
          }
          setValue(event.target.value);
        }}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option.split('-').join(' ')}
          </option>
        ))}
      </select>
    </Container>
  );
};

export default Dropdown;
