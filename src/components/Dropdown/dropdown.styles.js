import styled from 'styled-components';

export const Container = styled.div`
  background-color: black;
  padding: 16px;
  display: flex;
  flex-direction: column;
  margin-top: -40px;
  label {
    color: white;
  }
  select {
    max-width: 200px;
    height: 40px;
    text-transform: capitalize;
    padding-left: 10px;
    padding-right: 10px;
    option {
      text-transform: capitalize;
    }
  }
`;
