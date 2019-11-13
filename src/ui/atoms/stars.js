import React from 'react';
import styled from 'styled-components';
import StarRatings from 'react-star-ratings';

const Title = styled.h2`
  font-size: 10px;
  color: #475364;
  transform: uppercase;
  margin-bottom: 3px;  
`;

const Wrapper = styled.div``;

export const RatingStars = ({ title, green, rate }) => (
  <Wrapper>
    <Title>{title}</Title>
    <StarRatings 
      rating={rate}
      numberOfStars={5}
      starDimension="15px"
      starSpacing="0px"
      starRatedColor={green ? '#67C600':'#FF5D00'}
    />
  </Wrapper>
);
