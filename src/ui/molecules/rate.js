import React from 'react';
import styled from 'styled-components';
import { RatingStars } from '../atoms';

const Wrapper= styled.section`
  margin-bottom: 35px;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`

const Title = styled.h2`
  font-size: 12px;
  margin-bottom: 16px;
`;

export const Rate = () => (
  <Wrapper>
    <Title>Оценка соискателя</Title>
    <Container>
      <RatingStars title='Оценка резюме' green rate={5}/>
      <RatingStars title='Оценка тестового задания' rate={1}/>
      <RatingStars title='Оценка собеседования' rate={1}/>
    </Container>
  </Wrapper>

);

