import React, {useState, useEffect} from 'react';

import {
  Container,
  Loading,
  Main,
  Sidebar
} from "./styles";

import Profile from "./Profile";
import Filter from "./Filter";
import Repositories from "./Repositories";
import {getUser, getRepos, getLanguagesFrom} from "../../services/api";

function RepositoriesPage() {
  const [user, setUser] = useState();
  const [repositories, setRepositories] = useState();
  const [languages, setLanguages] = useState();
  const [currentLanguage, setCurrentLanguage] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData(){
      const [userResponse, reposResponse] = await Promise.all([
        getUser("lucaslirah"),
        getRepos("lucaslirah")
      ]);

      setUser(userResponse.data);
      setRepositories(reposResponse.data);
      setLanguages(getLanguagesFrom(reposResponse.data));

      setLoading(false);
    }

    loadData();
  }, []);

  const onFilterClick = (language) => {
    setCurrentLanguage(language);
  }

  if(loading) {
    return <Loading>Carregando...</Loading>;
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
