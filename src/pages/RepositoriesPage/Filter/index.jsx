import React from 'react';

import {Cleaner, Container, Selector} from './styles';

function Filter() {
  const languages = [
    {name: 'JavaScript', count: 5, color: '#f1c40f'},
    {name: 'Shell', count: 2, color: '#95a5a6'},
    {name: 'PHP', count: 1, color: '#3498db'},
    {name: 'Python', count: 1, color: '#27ae60'},
  ];

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

export default Filter;
