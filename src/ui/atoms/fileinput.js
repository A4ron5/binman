import React from 'react';
import styled from 'styled-components';

const Button = styled.label`
  display: inline-block;
  font-size: 10px;
  color: #fff;
  padding: 8px 10px;
  background: #386BF2;
  border-radius: 3px;
  cursor: pointer;
`;

const InputField = styled.input`
  display: none;
`;

const WrapperInput = styled.div`
  width: 100%;
  padding: 7px 5px;
  background: #F4F9FB;
  color: #8EA4B5;
  border: 1px solid #DCE5EA;
  border-radius: 3px;
  p {
    display: inline-block;
    font-size: 12px;
    text-transform: none;
    font-weight: normal;
    margin-left: 10px;
  }
`;

const FileInputTitle = styled.label`
  display: block;
  margin-bottom: 4px;
  font-size: 11px;
`

const FileInputDescription = styled.p`
  display: block;
  font-size: 10px;  
  color: #8EA4B5;
  font-weight: normal;
  text-transform: none;
  margin-bottom: 8px;
`

const Wrapper = styled.div`
  margin-bottom: 20px;
`

export const FileInput = ({ title, id, isFileSelected = false, format = 'jpg, png', size = 5 }) => (
  <Wrapper>
    <FileInputTitle>{title}</FileInputTitle>
    <FileInputDescription>Размер файла вложения не должен превышать {size} Мб, для загрузки допустимы следующие форматы файлов: {format}</FileInputDescription>
    <WrapperInput>
      <Button htmlFor={id}>Выберите файл</Button>
      { isFileSelected ? <p>Готово</p>: <p>Файл не выбран</p> }
      <InputField id={id} type='file'/>
    </WrapperInput>
  </Wrapper>
  
)