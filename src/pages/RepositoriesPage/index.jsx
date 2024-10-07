import React, {useState, useEffect} from 'react';
import {useNavigate, useParams} from "react-router-dom";

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
import BackButton from "../../components/BackButton/BackButton";

function RepositoriesPage() {
  const [user, setUser] = useState();
  const {login} = useParams();
  const [repositories, setRepositories] = useState();
  const [languages, setLanguages] = useState();
  const [currentLanguage, setCurrentLanguage] = useState();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    async function loadData(){
      const [userResponse, reposResponse] = await Promise.all([
        getUser(login),
        getRepos(login)
      ]);

      setUser(userResponse.data);
      setRepositories(reposResponse.data);
      setLanguages(getLanguagesFrom(reposResponse.data));

      setLoading(false);
    }

    loadData();
  }, [login]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        navigate(-1); // Voltar para a página anterior
      }
    }

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    }
  },[navigate]);

  const onFilterClick = (language) => setCurrentLanguage(language);

  if(loading) {
    return <Loading>Carregando...</Loading>;
  }

  return (
    <Container>
      <Sidebar>
        <BackButton

        />
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
