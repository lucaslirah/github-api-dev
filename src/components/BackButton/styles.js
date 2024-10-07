import styled from 'styled-components';

export const Button = styled.button`
padding: 0.5rem 1rem;
    background-color: transparent;
    color: ${(props) => props.theme.colors.white};
    border: none;
    border-radius: 0.25rem;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      color: rgba(255, 255, 255, 0.5);
    }
`;
