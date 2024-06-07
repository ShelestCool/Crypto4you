import { useParams, useNavigate } from "react-router-dom";
import useAxios from "../../../hooks/useAxios"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import moment from "moment";
import Skeleton from "../../Skeleton";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);


const HistoryChart = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { response } = useAxios(`coins/${id}/market_chart?vs_currency=usd&days=60`);
  
  if(!response) {
    return (
      <div className="wrapper-container mt-8">
        <Skeleton className="bigBlock" />
      </div>
    )
  }
  const coinChartData = response.prices.map(value => ({ x: value[0], y: value[1] }));
  
  const options = {
    responsive: true
  }
  const data = {
    labels: coinChartData.map(value => moment(value.x).format('MMM DD')),
    datasets: [
      {
        fill: true,
        label: id,
        data: coinChartData.map(val => val.y),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      }
    ]
  }

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <p onClick={goBack} style={{ fontSize: '20px', cursor: 'pointer', paddingTop: '20px'}}>← Назад</p>
      <Line options={options} data={data} />
    </div>
  )
}

export default HistoryChart;