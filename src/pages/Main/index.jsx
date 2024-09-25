import React from "react";
import { MdSearch } from "react-icons/md"

import {Button, Container, Form, Input, LogoGit, Title} from "./styles";
import githubLogo from "../../assets/images/github-logo.svg"

export default function Main() {
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
        <Input placeholder="usuário"/>
        <Button>
          <MdSearch className="icon" size={42}/>
        </Button>
      </Form>
    </Container>
  );
}
