import React from 'react';

import {Container, Main, Sidebar} from "./styles";

import Profile from "./Profile";
import Filter from "./Filter";
import Repositories from "./Repositories";
import {getLanguagesFrom} from "../../services/api";

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

// cálculo das repositórios
const repositories = [
  {name: 'github-api-dev', description: 'API desenvolvida para gerenciar repositórios do GitHub', language: 'JavaScript', html_url: 'www.google.com'},
  {name: 'github-api-dev', description: 'API desenvolvida para gerenciar repositórios do GitHub', language: 'TypeScript', html_url: 'www.google.com'},
  {name: 'web-dev-challenge', description: 'Desafio para desenvolvedores front-end', language: 'Python', html_url: 'www.google.com'},
  {name: 'react-native-challenge', description: 'Desafio para desenvolvedores React Native', language: 'JavaScript', html_url: 'www.google.com'},
];

const languages = getLanguagesFrom(repositories);

function RepositoriesPage() {
  return (
    <Container>
      <Sidebar>
        <Profile user={user}/>
        <Filter languages={languages}/>
      </Sidebar>
      <Main>
        <Repositories/>
      </Main>
    </Container>
  )
}

export default RepositoriesPage;
