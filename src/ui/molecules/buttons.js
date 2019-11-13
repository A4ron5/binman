import React from 'react';
import styled from 'styled-components';
import { Button } from '../atoms';

const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  padding-bottom: 20px;
`;

export const Buttons = ({ handleClick }) => (
  <Wrapper>
    <Button handleClick={handleClick} name='Отменить' />
    <Button handleClick={handleClick} name='Добавить соискателя' blue/>
  </Wrapper>
)
