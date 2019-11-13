import React from 'react';
import styled from 'styled-components';
import Image from './select-arrow.svg';



const InputField = styled.select`
  width: 100%;
  padding: 12px;
  color: #8EA4B5;
  background: #F4F9FB;
  border: 1px solid #DCE5EA;
  border-radius: 3px;
  appearance: none;
  cursor: pointer;
  &:focus { 
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    outline: none;
  }
`
const Opiton = styled.option`
  padding: 20px 20px;
`;

const Arrow = styled.img`
  position: absolute;
  right: 12px;
  bottom: 20px;
  cursor: pointer;
`;

const SelectInputTitle = styled.label`
  display: block;
  margin-bottom: 8px;
  font-size: 11px;
`

const Wrapper = styled.div`
  position: relative;
  margin-bottom: 20px;
`;

export const SelectInput = ({ title }) => (
  <Wrapper>
    <SelectInputTitle>{title}</SelectInputTitle>
    <InputField>
      <Opiton value='' hidden>Выберите вакансию</Opiton>
      <Opiton>Frontend разработчик</Opiton>
      <Opiton>Backend разработчик</Opiton>
    </InputField>
    <Arrow src={Image}/>
  </Wrapper>
)