import React from 'react';
import {Avatar, Container, Header, Login, Name} from './styles';

function Profile() {
  return (
    <Container>
      <Header>
        <Avatar src="https://avatars.githubusercontent.com/u/99286728?v=4"/>
        <Login>lucaslirah</Login>
        <Name>Lucas Lira</Name>
      </Header>
    </Container>
  )
}

export default Profile;
