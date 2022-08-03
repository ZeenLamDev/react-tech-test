import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Logo } from '../.././logo.svg';
import {
  Container,
  Wrapper,
  BreadCrumb,
  Title,
  Text,
} from './coursesBrief.styles';

const CoursesBrief = () => {
  return (
    <Container>
      <Wrapper>
        <div>
          <BreadCrumb>Hult / Courses</BreadCrumb>
          <Title>Courses</Title>
          <Text>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas
            nam ipsa vitae vel est! Minima laboriosam vero explicabo iure
            nesciunt!
          </Text>
        </div>
      </Wrapper>
    </Container>
  );
};

export default CoursesBrief;
