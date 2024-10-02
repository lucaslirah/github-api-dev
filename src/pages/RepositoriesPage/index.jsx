import React, {useState} from 'react';

import {Container, Main, Sidebar} from "./styles";

import Profile from "./Profile";
import Filter from "./Filter";
import Repositories from "./Repositories";
import {getLanguagesFrom} from "../../services/api";

function RepositoriesPage() {
  const [currentLanguage, setCurrentLanguage] = useState();

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
    {id: '1', name: 'github-api-dev', description: 'API desenvolvida para gerenciar repositórios do GitHub', language: 'JavaScript', html_url: 'www.google.com'},
    {id: '2', name: 'github-api-dev', description: 'API desenvolvida para gerenciar repositórios do GitHub', language: 'TypeScript', html_url: 'www.google.com'},
    {id: '3', name: 'web-dev-challenge', description: 'Desafio para desenvolvedores front-end', language: 'Python', html_url: 'www.google.com'},
    {id: '4', name: 'react-native-challenge', description: 'Desafio para desenvolvedores React Native', language: 'JavaScript', html_url: 'www.google.com'},
  ];

  const languages = getLanguagesFrom(repositories);

  const onFilterClick = (language) => {
    setCurrentLanguage(language);
  }

  return (
    <Container>
      <Sidebar>
        <Profile user={user}/>
        <Filter
          languages={languages}
          currentLanguage={currentLanguage}
          onClick={onFilterClick}
        />
      </Sidebar>
      <Main>
        <Repositories
          repositories={repositories}
          currentLanguage={currentLanguage}
        />
      </Main>
    </Container>
  )
}

export default RepositoriesPage;
