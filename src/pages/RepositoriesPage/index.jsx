import React from 'react';

import {Container, Main, Sidebar} from "./styles";

import Profile from "./Profile";
import Filter from "./Filter";
import Repositories from "./Repositories";

const user = {
  login: "lucaslirah",
  avatar_url: "https://avatars.githubusercontent.com/u/99286728?v=4",
  name: "Lucas Lira",
  company: "@edinheirobrasil",
  blog: "lucasliradev@gmail.com",
  location: "Fortaleza, Brazil",
  followers: 5,
  following: 6,
}

function RepositoriesPage() {
  return (
    <Container>
      <Sidebar>
        <Profile user={user}/>
        <Filter/>
      </Sidebar>
      <Main>
        <Repositories/>
      </Main>
    </Container>
  )
}

export default RepositoriesPage;
