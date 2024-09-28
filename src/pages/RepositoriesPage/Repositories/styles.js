import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 2rem;
  margin-top: 2rem;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.sm}){
    grid-template-columns: auto;
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoints.sm}){
    grid-template-columns: auto auto;
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoints.xl}){
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoints.xxl}){
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`;
