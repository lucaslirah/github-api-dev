import React from 'react';
import { MdGroup, MdWork, MdLocationCity, MdLink } from 'react-icons/md';

import {Avatar, Container, Data, Header, Inner, Login, Name} from './styles';

function Profile() {
  return (
    <Container>
      <Header>
        <Avatar src="https://avatars.githubusercontent.com/u/99286728?v=4"/>
        <Login>lucaslirah</Login>
        <Name>Lucas Lira</Name>
      </Header>
      <Inner>
        <Data>
          <MdGroup size={20}/>
          &nbsp;30&nbsp;<i>seguidores</i>&nbsp;&middot;&nbsp;10&nbsp;<i>seguindo</i>
        </Data>
        <Data>
          <MdWork size={20}/>
          &nbsp;<i>e-dinheiro</i>
        </Data>
        <Data>
          <MdLocationCity size={20}/>
          &nbsp;<i>Fortaleza, CE</i>
        </Data>
        <Data>
          <MdLink size={20}/>
          <a href="https://github.com/lucaslirah">/lucaslirah</a>
        </Data>
      </Inner>
    </Container>
  )
}

export default Profile;
