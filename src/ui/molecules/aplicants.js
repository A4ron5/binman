import React from 'react';
import styled from 'styled-components';
import { Aplicant } from '../atoms';

const AplicantsContainer = styled.div`
`;

const Button = styled.div`
  width: 100%;
  height: 36px;
  line-height: 36px;
  font-size: 11px;
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
  background: #fff;
  cursor: pointer;
`;

const Header = styled.div`
  height: 40px;
  background: #fff;
  margin-bottom: 2px;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 11px;
  line-height: 40px;
`;

const HeaderContainer = styled.div`
  width: 1260px;
  margin: 0 auto;
  display: flex;
`;

const HeaderAplicant = styled.div`
  width: 319px;
`;

const HeaderPhone = styled.div`
  width: 247px;
`;

const HeaderEmail = styled.div`
  width: 397px;
`;

const HeaderRating = styled.div`
  width: 179px;
`;

export const Aplicants = () => (
  <AplicantsContainer>
    <Header>
      <HeaderContainer>
        <HeaderAplicant>Соискатель</HeaderAplicant>
        <HeaderPhone>Телефон</HeaderPhone>
        <HeaderEmail>E-mail</HeaderEmail>
        <HeaderRating>Оценка соискателя</HeaderRating>
      </HeaderContainer>
    </Header>
    <Aplicant 
      name='Бинман Иван Натанович'
      position='Full-stack разрабочик'
      phone='+7 (900) 800-70-60'
      email='ioan@binman.ru'
      rating={4}
      color='#ABD02D'
      more
    />
    <Aplicant 
      name='Дурков Павел Валерьевич'
      position='Full-stack разрабочик'
      phone=''
      email='durkov@vkontakte.ru'
      rating={1}
      color='#FF5D00'
    />
    <Aplicant 
      name='Лебедин Артеймий Андреевич'
      position='Web-дизайнер'
      phone='+7 (800) 555-35-35'
      email='design@lebedin.ru'
      rating={3}
      color='#DAE700'
    />
    <Aplicant 
      name='Чулков Олег'
      position='Web-дизайнер'
      phone=''
      email=''
      rating={2}
      color='#FFA800'
    />
    <Aplicant 
      name='Федора Линукс Линусович'
      position='Front-end разрабочик'
      phone='+7 (800) 200-06-60'
      email='ioan@binman.ru'
      rating={5}
      color='#67C600'
      more
    />
    <Button >Показать еще</Button>
  </AplicantsContainer>
)