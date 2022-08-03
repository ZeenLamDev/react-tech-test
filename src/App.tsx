import React, { useState, useEffect, useMemo } from 'react';
import Header from '../src/components/Header/Header';
import List from '../src/components/List/List';
import styled from 'styled-components';
import courseData from './data/courses.json';
import Dropdown from './components/Dropdown/Dropdown';
import { Container, Wrapper } from './app.styles';
import CoursesBrief from './components/CoursesBrief/CourseBrief';

const App = () => {
  const [courses, setCourses] = useState<typeof courseData>([]);
  const [value, setValue] = useState('');
  const [resultLength, setResultLength] = useState(0);

  useEffect(() => {
    setCourses(courseData);
  });

  const filteredCourses = useMemo(() => {
    if (!value) return courses;
    return courses.filter((course) => value === course['course-type']);
  }, [value, courses]);

  console.log(filteredCourses.length);

  return (
    <Container>
      <Header />
      <CoursesBrief />
      <Wrapper>
        {/* <Header /> */}
        <div style={{ maxWidth: 1440, width: '100%' }}>
          <Dropdown setValue={setValue} />
          <p>Showing {resultLength} results</p>
        </div>
        <List courses={filteredCourses} setResultLength={setResultLength} />
      </Wrapper>
    </Container>
  );
};

export default App;
