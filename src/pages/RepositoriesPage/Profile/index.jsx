import { MdGroup, MdWork, MdLocationCity, MdLink } from 'react-icons/md';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from'react-modal';

import { Avatar, CloseButton, Container, customStyles, Data, Header, Inner, Login, Name, StyledModal } from './styles';

Modal.setAppElement('#root');

function Profile({user}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const closeModal = () => setIsModalOpen(false);
  const openModal = () => setIsModalOpen(true);

  return (
    <Container>
      <Header>
        <Avatar src={user.avatar_url} onClick={openModal}/>
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

      <StyledModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Imagem de Perfil"
        style={customStyles}
      >
        <h2>{user.name}</h2>
        <img src={user.avatar_url} alt={`${user.name} avatar`} style={{ width: '100%', height: 'auto' }}/>
        <CloseButton type="button" onClick={closeModal}>Fechar</CloseButton>
      </StyledModal>
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
