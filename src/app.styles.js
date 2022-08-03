import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fffae7;
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fffae7;
  > div {
    padding: 20px;
    width: calc(100% - 40px);
  }
`;
