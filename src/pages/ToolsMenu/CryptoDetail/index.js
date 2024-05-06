import React from 'react';
import { Container } from 'react-bootstrap';
import HistoryChart from '../../../components/CryptoList/HistoryChart/HistoryChart';
import CoinDetail from '../../../components/CryptoList/CoinDetail/CoinDetail';


const CryptoDetail = () => {
  return (
    <Container>
      <HistoryChart />
      <CoinDetail />
    </Container>
  );
};

export default CryptoDetail;
