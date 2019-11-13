import React from 'react';
import styled from 'styled-components';
import { FileInput } from '../atoms';

const Title = styled.h2`
  font-size: 12px;
  margin-bottom: 16px;
`;

const Wrapper = styled.section`
  margin-bottom: 40px;
`;


export const Resume = () => (
  <Wrapper>
    <Title>Резюме и результаты тестового задания</Title>
    <FileInput title = 'Резюме' id='file' size='50' format='pdf, doc'/>
    <FileInput title = 'Архив с результатами тестового задания' id='file' size='50' format='zip, rar'/>
  </Wrapper>
)