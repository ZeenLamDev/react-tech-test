import React, { useState, useEffect, Fragment, FC } from 'react';
import courseData from '../../data/courses.json';
import {
  Container,
  Wrapper,
  Topics,
  Divider,
  LargeDivider,
  Topic,
  SubTitle,
  CourseType,
  CourseTitle,
  CourseDescription,
  ListContainer,
  Button,
} from './List.styles';

const PER_PAGE = 3;

const List: FC<{
  courses: typeof courseData;
  setResultLength: React.Dispatch<React.SetStateAction<number>>;
}> = ({ courses, setResultLength }) => {
  const [data, setData] = useState<typeof courseData>([]);
  const [page, setPage] = useState(0);

  const maxPages = courses.reduce((all, item, index) => {
    if (index % 3 === 0) return all + 1;
    return all;
  }, 0);

  useEffect(() => {
    setData(() => {
      const moreData = courses.slice(0, (page + 1) * PER_PAGE);
      setResultLength(moreData.length);
      return moreData;
    });
  }, [page, courses]);

  return (
    <>
      <ListContainer>
        {data.map((course) => {
          return (
            <Container key={course.id}>
              <Wrapper>
                <CourseType>
                  {course['course-type'].split('-').join(' ')}
                </CourseType>
                {/* <div>ID: {course.id}</div> */}
                <CourseTitle>{course.title}</CourseTitle>
                <CourseDescription>{course.description}</CourseDescription>
              </Wrapper>
              <Topics>
                <LargeDivider />
                <SubTitle>Key Topics & Skills</SubTitle>
                {course.topics.map((t) => {
                  return (
                    <Fragment key={t}>
                      <Divider />
                      <Topic>{t}</Topic>
                    </Fragment>
                  );
                })}
              </Topics>
            </Container>
          );
        })}
      </ListContainer>
      <Button
        disabled={courses.length === data.length}
        type="button"
        value="Load More"
        onClick={() => {
          setPage((page) => (maxPages !== page ? page + 1 : page));
        }}
      />
    </>
  );
};

export default List;
