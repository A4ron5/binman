import React from 'react';
import styled from 'styled-components';
import { ReactComponent as PhoneLogo} from './phone.svg'
import { ReactComponent as EmailLogo} from './mail.svg'
import StarRatings from 'react-star-ratings';
import { ReactComponent as Resume } from './resume.svg';
import { ReactComponent as Archive } from './archive.svg';
import { ReactComponent as Favorites } from './favorites.svg';
import { removePropertiesDeep } from '@babel/types';

const Container = styled.div`
  width: 1260px;
  margin: 0 auto;
  display: flex;
`
const Line = styled.div`
  max-width: 1300px;
  height: 68px;
  background: #fff;
  border-radius: 3px;
  display: flex;
  align-items: center;
  margin-bottom: 2px;
`;

const People = styled.div`
  display: flex;
  width: 319px;
`;

const Logo = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${props => `${props.color}`};
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-left: 10px;
`;

const StarsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Title = styled.span`
  display: block;
  font-size: 12px;
  font-weight: bold;
  color: ${props => props.phone ? '#A3A9B1' : ''};
  color: ${props => props.email ? '#A3A9B1' : ''};

`;

const Descr = styled.span`
  display: block;
  font-size: 10px;
  color: #8EA4B5;
`;

const Phone = styled.div`
  display: flex;
  width: 247px;
  svg path {
    fill: ${props => props.phone ? '' : '#A3A9B1'}
  }
`;

const Email = styled.div`
  display: flex;
  width: 397px;
  svg path {
    fill: ${props => props.email ? '' : '#A3A9B1'}
  }
`

const Stars = styled.div`
  display: flex;
  width: 179px;
`;

const StarsDescrWrapper = styled.span`
  font-weight: bold;
  color: #475364;
`;

const LineButtons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 118px;
`;

const LineButtonWrapper = styled.div`
  width: 36px;
  height: 36px;
  background: #fff;
  border: 1px solid #DBE4E7;
  border-radius: 3px;
  cursor: pointer;
  svg {
    display: block;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    margin: auto;
  }
`;

export const Aplicant = ({ name, position, phone, more, email, rating, color }) => (
  <Line>
    <Container>
      <People>
        <Logo color={color}/>
        <Wrapper>
          <Title>{name}</Title>
          <Descr>Вакансия: {position}</Descr>
        </Wrapper>
      </People>
      <Phone phone={phone}>
        <PhoneLogo/>
        <Wrapper>
          {phone ? <Title>{phone}</Title> : <Title phone>Телефон не указан</Title>}
          {more && <Descr >Показать еще 1 номер</Descr>}
        </Wrapper>
      </Phone>
      <Email email={email}>
        <EmailLogo />
        <Wrapper>
          {email ? <Title>{email}</Title> : <Title email>Email не указан</Title>}
          {more && <Descr>Показать еще 1 e-mail</Descr>}
        </Wrapper>
      </Email>
      <Stars>
        <StarsWrapper>
          <StarRatings 
            rating={rating}
            numberOfStars={5}
            starDimension="15px"
            starSpacing="0px"
            starRatedColor={color}
          />
          <Descr>Средний бал: <StarsDescrWrapper>{rating}.0</StarsDescrWrapper></Descr>
        </StarsWrapper>
      </Stars>
      <LineButtons>
        <LineButtonWrapper>
          <Resume />
        </LineButtonWrapper>
        <LineButtonWrapper>
          <Archive />
        </LineButtonWrapper>
        <LineButtonWrapper>
          <Favorites />
        </LineButtonWrapper>
      </LineButtons>
    </Container>
  </Line>
);