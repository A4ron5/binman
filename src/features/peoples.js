import React, { useState } from 'react';
import styled from 'styled-components';
import { Form } from '../features';
import { Aplicants } from '../ui/molecules';
import { ReactComponent as AddLogo } from './add.svg';
import { ReactComponent as ArchiveLogo } from '../ui/atoms/archive.svg';

const Wrapper = styled.div`
  position: relative;
  width: 1360px;
  font-family: 'Roboto';
  color: #475364;
  background: #F4F9FB;
`;

const ContentHeader = styled.div`
  display: flex;
  height: 36px;
  margin-bottom: 20px;
`;

const Container = styled.div`
  width: 1300px;
  margin: 0 auto;
  margin-top: 20px;
`

const Title = styled.h2`
  font-weight: bold;
  font-size: 22px;
`;

const Descr = styled.span`
  display: block;
  font-size: 11px;
  color: ${props => props.isOpen ? '' : '#8EA4B5'};
`;

const Information = styled.div`
  margin-right: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ButtonFav = styled.div`
  position: relative;
  width: 116px;
  height: 36px;
  border: 1px solid #DBE4E7;
  border-radius: 3px;
  text-align: center;
  line-height: 36px;
  font-size: 11px;
  font-weight: bold;
  background: white;
  text-transform: uppercase;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  };
  svg, p {
    display: block;
    line-height: 11px;
  };
  svg {
    margin-right: 6px;
  }
`;

const ButtonAdd = styled.div`
  margin-left: 10px;
  width: 181px;
  height: 36px;
  border-radius: 3px;
  background: #386BF2;
  color: #fff;
  text-align: center;
  line-height: 36px;
  font-size: 11px;
  text-transform: uppercase;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  };
  svg, p {
    display: block;
    line-height: 11px;
  };
  svg {
    margin-right: 6px;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Mock = styled.div`
  width: 1360px;
  height: 990px;
  background: #697482;
  opacity: .7;
  position: absolute;
  z-index: 10;
`

export const Peoples = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <Wrapper isOpen={isOpen}>
      {isOpen ? <Mock /> : null}
      <Container>
        <ContentHeader>
          <Information>
            <Title>Ваши соискатели</Title>
            <Descr isOpen={isOpen}>Всего соискателей: 67</Descr>
          </Information>
          <ButtonFav>
            <ButtonWrapper>
              <ArchiveLogo />
              <p>Избранное</p>
            </ButtonWrapper>
          </ButtonFav>
          <ButtonAdd 
            onClick={() => setIsOpen(true)}>
            <ButtonWrapper>
              <AddLogo />
              <p>Добавить соискателя</p>
            </ButtonWrapper>
          </ButtonAdd>
        </ContentHeader>
        <Aplicants />
      </Container>
      {isOpen ? <Form handleClick={() => setIsOpen(false)}/> : null}
    </Wrapper>
  )
}