import React from 'react';
import PropTypes from "prop-types";

import {Cleaner, Container, Selector} from './styles';

function Filter({ languages }) {

  return (
    <Container>
      {
        languages.map(({ name, color, count}) => (
          <Selector key={name.toLowerCase()} color={color}>
            <span>{name}</span> &middot;
            <span>{count}</span>
            {
              // aparecer em plural ou singular "repositório"
              count > 1 ? <span className="repos">repositórios</span> :  <span className="repos">repositório</span>
            }
          </Selector>
        ))
      }
      <Cleaner>Limpar</Cleaner>
    </Container>
  )
}

Filter.propTypes = {
  languages: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
  })).isRequired,
}

export default Filter;
