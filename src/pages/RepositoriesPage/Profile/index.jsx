import React from 'react';
import PropTypes from "prop-types";
import { MdGroup, MdWork, MdLocationCity, MdLink } from 'react-icons/md';

import {Avatar, Container, Data, Header, Inner, Login, Name} from './styles';

function Profile({user}) {
  return (
    <Container>
      <Header>
        <Avatar src={user.avatar_url}/>
        <Login>{user.login}</Login>
        <Name>{user.name}</Name>
      </Header>
      <Inner>
        <Data>
          <MdGroup size={20}/>
          &nbsp;{user.followers}&nbsp;<i>seguidores</i>&nbsp;&middot;&nbsp;{user.following}&nbsp;<i>seguindo</i>
        </Data>
        {
          user.company &&
          <Data>
            <MdWork size={20}/>
            &nbsp;<i>{user.company}</i>
          </Data>
        }
        {
          user.location &&
          <Data>
            <MdLocationCity size={20}/>
            &nbsp;<i>{user.location}</i>
          </Data>
        }
        {
          user.blog &&
          <Data>
            <MdLink size={20}/>
            <a href={`\\${user.blog}`} target="_blank" rel="noreferrer">{user.blog}</a>
          </Data>
        }
      </Inner>
    </Container>
  )
}

Profile.propTypes = {
  user: PropTypes.shape({
    login: PropTypes.string.isRequired,
    avatar_url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    location: PropTypes.string,
    blog: PropTypes.string,
    followers: PropTypes.number.isRequired,
    following: PropTypes.number.isRequired,
    company: PropTypes.string,
  }).isRequired,
}

export default Profile;
