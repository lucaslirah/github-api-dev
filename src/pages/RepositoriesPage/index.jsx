import React from 'react';
import {Container, Main, Sidebar} from "./styles";
import Profile from "./Profile";

function RepositoriesPage() {
  return (
    <Container>
      <Sidebar>
        <Profile />
        {/* Sidebar components */}
      </Sidebar>
      <Main>Main</Main>
    </Container>
  )
}

export default RepositoriesPage;
