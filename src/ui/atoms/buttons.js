import React from 'react';
import styled from 'styled-components';

const Btn = styled.div`
  display: block;
  width: 295px;
  height: 36px;
  background: ${props => props.blue ? '#386BF2' : '#fff'};
  border: 1px solid;
  border-color: ${props => props.blue ? '' : '#D4E2E7'};
  color: ${props => props.blue ? '#fff' : '#475364'};
  border-radius: 3px;
  font-size: 11px;
  text-align: center;
  line-height: 36px;
  cursor: pointer;
  &:hover{
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25)
  }
`;

export const Button = ({ name, blue, handleClick }) => (
  <Btn onClick={handleClick} blue={blue}>{name}</Btn>
);