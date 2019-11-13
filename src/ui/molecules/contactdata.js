import React from 'react';
import styled from 'styled-components';
import { TextInput } from '../atoms';

const Title = styled.h2`
  font-size: 12px;
  margin-bottom: 16px;
`;

const Wrapper = styled.section`
  margin-bottom: 40px;
`;

export const ContactData = () => (
  <Wrapper>
    <Title>Контактные данные</Title>
    <TextInput title='номер телефона' add/>
    <TextInput title='e-mail' add/>
  </Wrapper>
);