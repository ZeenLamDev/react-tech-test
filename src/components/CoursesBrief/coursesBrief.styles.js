import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background-color: white;
  padding-bottom: 20px;
`;

export const Wrapper = styled.div`
  max-width: 1440px;
  margin: auto;
  background-color: white;
  margin-bottom: 40px;
  div {
    width: 50%;
  }
  h2 {
    font-weight: 500;
  }
  p {
    font-size: 16px;
  }
  @media (max-width: 700px) {
    div {
      width: 100%;
    }
  }
`;

export const BreadCrumb = styled.p`
  font-weight: 500;
`;

export const Title = styled.h1`
  font-size: 48px;
  line-height: 32px;
`;

export const Text = styled.p`
  font-size: 18px;
  line-height: 24px;
  font-weight: 600;
`;
