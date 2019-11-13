import React from 'react';
import styled from 'styled-components';

const InputField = styled.input`
  width: 100%;
  padding: 12px;
  background: #F4F9FB;
  color: #8EA4B5;
  border: 1px solid #DCE5EA;
  border-radius: 3px;
  &:focus{ 
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    outline: none;
  };
  &::placeholder{
    color: #8EA4B5;
  }
`

const InputTitle = styled.label`
  display: block;
  margin-bottom: 8px;
  font-size: 11px;
`

const Wrapper = styled.div`
  margin-bottom: 20px;
`

const AddField = styled.span`
  display: block;
  font-weight: normal;
  font-size: 10px;
  color: #8EA4B5;
  text-transform: none;
  text-decoration: underline;
  margin-top: 4px;
  cursor: pointer;
`

export const TextInput = ({ id, title, type, add}) => (
  <Wrapper>
    <InputTitle htmlFor={id}>{title}</InputTitle>
    <InputField id={id} placeholder={`Введите ${title}`} type={type}/>
    {add && <AddField>Добавить еще один {title}</AddField>}
  </Wrapper>
);