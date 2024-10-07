import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from './styles';

function BackButton () {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // Navega para a página anterior
  };

  return (
    <Button type='button' onClick={handleBack}>
      Voltar
    </Button>
  );
}

export default BackButton;
