import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Logo } from '../.././logo.svg';

const Container = styled.div`
  width: 100%;
  background-color: #383838;
  height: 80px;
  /* display: flex; */
`;

const Wrapper = styled.div`
  max-width: 1440px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: auto;
  height: 100%;
  width: 100%;
  svg {
    height: 45px;
  }
`;

const Header = () => {
  return (
    <Container>
      <Wrapper>
        <LogoContainer>
          <Logo />
        </LogoContainer>
      </Wrapper>
    </Container>
  );
};

export default Header;
