import React from 'react';
import { Container, Description, Footer, Lang, Link,  Name } from "./styles";

function Repository() {
  return (
    <Container color="#f1c40f">
      <Name>Repository</Name>
      <Description>Repository Description</Description>
      <Footer color="#f1c40f">
        <Lang>Repository Lang</Lang>
        <Link href="https://github.com" target="_blank">
          Ver
        </Link>
      </Footer>
    </Container>
  )
}

export default Repository;

