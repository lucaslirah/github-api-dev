import React from 'react';
import PropTypes from "prop-types";

import { Container } from './styles';
import Repository from './Repository';

function Repositories({ repositories }) {
  return (
    <Container>
      {
        repositories.map(repo => <Repository key={repo.id} repository={repo}/>)
      }
    </Container>
  )
}

Repositories.propTypes = {
  repositories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      html_url: PropTypes.string.isRequired,
      language: PropTypes.string,
    }).isRequired
  ).isRequired,
}

export default Repositories;
