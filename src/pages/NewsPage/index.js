import "./style.css";
import AddNews from "../../components/News/index";
import reportWebVitals from "./reportWebVitals";

const NewsPage = () => {
  return (
    <div>
      <AddNews />
    </div>
  );
};

export default NewsPage;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
