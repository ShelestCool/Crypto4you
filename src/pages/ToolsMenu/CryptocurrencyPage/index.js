import React from 'react';
import { Container } from 'react-bootstrap';
import Markets from '../../../components/CryptoList/Markets/Markets';

const CryptocurrencyPage = () => {
  return (
    <Container> 
      <Markets />
    </Container>
  );
};

export default CryptocurrencyPage;