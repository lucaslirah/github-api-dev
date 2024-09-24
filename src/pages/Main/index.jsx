import React from "react";

import { Container, LogoGit} from "./styles";
import githubLogo from "../../assets/images/github-logo.svg"

export default function Main() {
  return (
    <Container>
      <LogoGit
        src={githubLogo}
        alt="API Github"
      />
    </Container>
  );
}
