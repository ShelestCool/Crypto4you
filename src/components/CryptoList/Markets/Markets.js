import useAxios from "../../../hooks/useAxios";
import Coin from "../Coin/Coin";
import Skeleton from "../../Skeleton";
import { useEffect, useState } from "react";

import "./markets.css";

const Markets = () => {
  const { response, loading, error } = useAxios(
    'coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
  );
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (error) {
      setHasError(true);
    }
  }, [error]);

  if (loading || hasError) {
    return (
      <>
      <div className="wrapper-container">
        <Skeleton className="smallBlock"/>
        <Skeleton className="longBlock"/>
        <Skeleton className="longBlock"/>
        <Skeleton className="longBlock"/>
        <Skeleton className="longBlock"/>
        <Skeleton className="longBlock"/>
        <Skeleton className="longBlock"/>
        <Skeleton className="longBlock"/>
        <Skeleton className="longBlock"/>
        <Skeleton className="longBlock"/>
        <Skeleton className="longBlock"/>
        <Skeleton className="longBlock"/>
        <Skeleton className="longBlock"/>
        <Skeleton className="longBlock"/>
        <Skeleton className="longBlock"/>
        <Skeleton className="longBlock"/>
        <Skeleton className="longBlock"/>
      </div>
      </>
    );
  }

  return (
    <section className="market">
      <h1 className="title">Криптовалюты</h1>
      {response && response.map(coin => <Coin key={coin.id} coin={coin} />)}
    </section>
  );
}

export default Markets;
