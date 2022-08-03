import styled from 'styled-components';

export const Container = styled.div`
  border-left: 4px solid #f07320;
  display: flex;
  width: 100%;
  margin-bottom: 15px;
  box-shadow: 4px 8px 8px #000;
  background-color: white;

  @media (max-width: 700px) {
    max-width: 700px;
    flex-direction: column;
    border-left: none;
    > div:first-child {
      border-top: 4px solid #f07320;
    }
    > div {
      width: calc(100% - 40px);
      padding: 20px;
    }
  }
`;

export const Wrapper = styled.div`
  padding-left: 25px;
  padding-right: 140px;
  padding-top: 40px;
  padding-bottom: 60px;
  width: 60%;
  background-color: #fff;
`;

export const Topics = styled.div`
  padding: 30px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 40%;
  background-color: #00000026;
`;
export const Divider = styled.div`
  border-top: 1px solid #19191933;
`;

export const LargeDivider = styled.div`
  border-top: 4px solid #000;
`;

export const Topic = styled.div`
  padding: 10px 0;
  font-weight: 500;
  font-size: 16px;
`;

export const SubTitle = styled.h4``;

export const CourseType = styled.p`
  font-weight: 500;
  font-size: 14px;
  text-transform: capitalize;
`;

export const CourseDescription = styled.p`
  font-weight: 500;
  font-size: 18px;
`;

export const CourseTitle = styled.p`
  font-weight: 800;
  font-size: 24px;
  line-height: 16px;
`;

export const ListContainer = styled.div`
  max-width: 1440px;
`;

export const Button = styled.input`
  width: auto;
  border: 1px solid;
  border-radius: 40px;
  padding: 20px 40px;
  background-color: transparent;
  margin: 25px 0;
  font-size: 24px;
  font-weight: 500;
`;
