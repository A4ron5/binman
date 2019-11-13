import React from 'react';
import styled from 'styled-components';
import Logo from '../logo.svg';
import { ReactComponent as Clients } from '../clients.svg';
import { ReactComponent as Reports } from '../reports.svg';
import { ReactComponent as Home } from '../home.svg';


const Container = styled.div`
  width: 1440px;
  margin: 0 auto;
`;

const Wrapper = styled.main`
  display: flex;
`;

const Header = styled.header`
  background: #29313C;
  height: 66px;
  margin: 0 auto;
`;

const HeaderLogo = styled.img`
  margin-top: 15px;
  margin-left: 27px;
  cursor: pointer;
`;

const AsideMenu = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 80px;
  height: 990px;
  background: #323A45;
`;


const LogoWrapper = styled.div`
  width: 50px;
  height: 29px;
  margin-bottom: 8px;
  cursor: pointer;
  background: ${props => props.active ? '#282E37' : ''};
  &:hover{
    background: #282E37;
  }
  &:first-child {
    margin-top: 10px;
  }
  &:hover svg path {
    fill: #00D4FF;
  }
  svg path {
    fill: ${props => props.active ? '#00D4FF' : ''}
  }
  svg {
    display: block;
    margin: 0 auto;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
  }
`

export const Main = ({ children }) => (
  <Container>
    <Header>
      <HeaderLogo src={Logo}/>
    </Header>
    <Wrapper>
      <AsideMenu>
        <LogoWrapper>
          <Home/>
        </LogoWrapper>
        <LogoWrapper active>
          <Clients />
        </LogoWrapper>
        <LogoWrapper>
          <Reports />
        </LogoWrapper>
      </AsideMenu>
      {children}
    </Wrapper>
  </Container>
  
)

