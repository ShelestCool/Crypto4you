import { Link } from "react-router-dom";
import { TrendingDown, TrendingUp } from "../../../icons/icons";
import { currencyFormat } from "../../../utils";

import "./coin.css";

const Coin = ({ coin }) => {
  return (
    <Link to={`/coin/${coin.id}`} className="coinLink">
      <div className="coin-conteiner">
        <div className="coin-row">
          <div className="coin">
            <img className="coinImg" src={coin.image} alt={coin.name} />
            <h2 className="coinName">{coin.name}</h2>
            <h2 className="coinName coin-symbol">({coin.symbol})</h2>
          </div>
          <div className="coin-data">
            <h2 className="coin-price coinName">{currencyFormat(coin.current_price)}</h2>
            {coin.price_change_percentage_24h < 0 ? (
              <h2 className="coin-chart coinName" style={{ color: 'red' }}><TrendingDown />{coin.price_change_percentage_24h}</h2>
            ) : (
              <h2 className="coin-chart coinName" style={{ color: 'green' }} ><TrendingUp />{coin.price_change_percentage_24h}</h2>
            )}
            <h2 className="coin-marketcap coinName">
              Mkt Cap: {currencyFormat(coin.market_cap)}
            </h2>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default Coin;