import React from 'react';
import styled from 'styled-components';
import { MainData, Resume, ContactData, Rate, Buttons } from '../ui/molecules';

const FormWrapper = styled.form`
  position: absolute;
  top: 0;
  right: 0;
  width: 650px;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  font-size: 14px;
  color: #475364;
  background: #fff;
  text-transform: uppercase;
  z-index: 100;
`;

const Container = styled.div`
  position: relative;
  width: 600px;
  margin: 0 auto;
`;

const FormTitle = styled.h1`
  padding: 20px 0px 40px;
`;

const CloseButton = styled.div`
  width: 30px;
  height: 30px;
  background: #fff;
  position: absolute;
  top: 12px;
  left: -60px;
  cursor: pointer;
  &::before, &::after {
    position: absolute;
    left: 14px;
    top: 7px;
    content: ' ';
    height: 15px;
    width: 1px;
    background-color: #333;
  }
  &::before{
    transform: rotate(45deg);
  }
  &::after{
    transform: rotate(-45deg);
  }
`


export const Form = ({ handleClick }) => {
  return (
    <FormWrapper>
      <Container>
        <CloseButton onClick={handleClick}/>
        <FormTitle>Добавление соискателя</FormTitle>
        <MainData/>
        <Resume />
        <ContactData />
        <Rate />
        <Buttons />
      </Container>
    </FormWrapper>
  )
}

