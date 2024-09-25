import React, {useState} from "react";
import { MdSearch } from "react-icons/md"

import {Button, Container, Form, Input, LogoGit, Title} from "./styles";
import githubLogo from "../../assets/images/github-logo.svg"

export default function Main() {
  const [ login, setLogin ] = useState('');

  return (
    <Container>
      <LogoGit
        src={githubLogo}
        alt="API GitHub"
      />
      <Title>
        API GitHub
      </Title>
      <Form>
        <Input
          placeholder="usuário"
          value={login}
          onChange={e => setLogin(e.target.value)}
        />
        <Button to={`/${login}/repositories`}>
          <MdSearch className="icon" size={42}/>
        </Button>
      </Form>
    </Container>
  );
}
