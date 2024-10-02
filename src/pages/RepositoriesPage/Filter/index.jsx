import React from 'react';
import PropTypes from "prop-types";

import {Cleaner, Container, Selector} from './styles';

function Filter({ languages, currentLanguage, onClick }) {

  return (
    <Container>
      {
        languages.map(({ name, color, count}) => (
          <Selector
            key={name.toLowerCase()}
            color={color}
            className={currentLanguage === name ? 'selected' : ''}
            onClick={()=> onClick && onClick(name)}  // chamada ao clicar no selector
          >
            <span>{name}</span> &middot;
            <span>{count}</span>
            {
              // aparecer em plural ou singular "repositório"
              count > 1 ? <span className="repos">repositórios</span> :  <span className="repos">repositório</span>
            }
          </Selector>
        ))
      }
      <Cleaner onClick={()=> onClick && onClick(undefined)} >Limpar</Cleaner>
    </Container>
  )
}

Filter.defaultProps = {
  currentLanguage: null,
  onClick: null,
}
Filter.propTypes = {
  languages: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
  })).isRequired,
  currentLanguage: PropTypes.string,
  onClick: PropTypes.func,
}

export default Filter;
