import React from 'react';
import styled from 'styled-components';
import { TextInput } from '../atoms';
import { SelectInput} from '../atoms';
import { FileInput } from '../atoms';

const Title = styled.h2`
  font-size: 12px;
  margin-bottom: 16px;
`;

const Wrapper = styled.section`
  margin-bottom: 40px;
`;

export const MainData = () => (
  <Wrapper>
    <Title>Основные данные</Title>
    <TextInput id='text' title='ФИО' type='text'/>
    <SelectInput title='Вакансия'/>
    <FileInput title = 'Фотография' id='file'/>
  </Wrapper>
)
