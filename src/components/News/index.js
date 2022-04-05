import "./style.css";
import axios from "axios";
import { XMLParser } from "fast-xml-parser";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

// https://ru.investing.com/rss/news_301.rss
// https://coinspot.io/feed/
// https://bits.media/rss2/

// const CORS_PROXY = "https://api.codetabs.com/v1/proxy?quest=";
// const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";
// const CORS_PROXY = "https://thingproxy.freeboard.io/fetch/";
const CORS_PROXY = "https://api.allorigins.win/raw?url=";

const parser = new XMLParser();

function AddNews() {
  const [coinspotFeed, setCoinspotFeed] = useState([]);
  const [forklogFeed, setForklogFeed] = useState([]);
  const [bitsMediaBlogFeed, setBitsMediaBlogFeed] = useState([]);

  useEffect(() => {
    (async () => {
      let response = await axios.get(CORS_PROXY + "https://coinspot.io/feed/");
      let jObj = parser.parse(response.data);
      console.log(jObj);
      setCoinspotFeed(jObj.rss.channel.item);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      let response = await axios.get(
        CORS_PROXY + "https://forklog.com/news/feed/"
      );
      let jObj = parser.parse(response.data);
      setForklogFeed(jObj.rss.channel.item);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      let response = await axios.get(CORS_PROXY + "https://bits.media/rss2/");
      let jObj = parser.parse(response.data);
      console.log(jObj);
      setBitsMediaBlogFeed(jObj.rss.channel.item);
    })();
  }, []);

  return (
    <Container>
      <div className="titleDiv">
        <p className="mainTitle">Новости</p>
        <p className="mainTitleText">
          Все новости индустрии — биткоин, блокчейн, криптовалюты, майнинг.
        </p>
      </div>
      <div className="AddNews">
        <div className="news">
          {!!coinspotFeed.length &&
            coinspotFeed.map((item, index) => (
              <div key={index} className="divNewsPost">
                <div className="newsCardTitle">
                  <h3
                    className="newsTitle"
                    dangerouslySetInnerHTML={{ __html: item.title }}
                  ></h3>
                  <span className="newsDate">{item.pubDate}</span>
                </div>
                <base target="_blank"></base>
                <div
                  className="newsMainText"
                  dangerouslySetInnerHTML={{ __html: item.description }}
                ></div>

                <a
                  href={item.link}
                  alt="link"
                  target="_blank"
                  rel="noreferrer"
                  className="mainLink"
                >
                  Подробнее →
                </a>
              </div>
            ))}
        </div>

        <div className="news2">
          {!!forklogFeed.length &&
            forklogFeed.map((item, index) => (
              <div key={index} className="divNewsPost2">
                <div className="newsCardTitle">
                  <h3
                    className="newsTitle2"
                    dangerouslySetInnerHTML={{ __html: item.title }}
                  ></h3>
                  <span className="newsDate2">{item.pubDate}</span>
                </div>
                <base target="_blank"></base>
                <div
                  className="newsMainText2"
                  dangerouslySetInnerHTML={{ __html: item.description }}
                ></div>

                <a
                  href={item.link}
                  alt="link"
                  target="_blank"
                  rel="noreferrer"
                  className="mainLink2"
                >
                  Подробнее →
                </a>
              </div>
            ))}
        </div>

        <div className="news">
          {!!bitsMediaBlogFeed.length &&
            bitsMediaBlogFeed.map((item, index) => (
              <div key={index} className="divNewsPost">
                <div className="newsCardTitle">
                  <h3
                    className="newsTitle"
                    dangerouslySetInnerHTML={{ __html: item.title }}
                  ></h3>
                  <span className="newsDate">{item.pubDate}</span>
                </div>
                <base target="_blank"></base>
                <div
                  className="newsMainText"
                  dangerouslySetInnerHTML={{ __html: item.description }}
                ></div>

                <a
                  href={item.link}
                  alt="link"
                  target="_blank"
                  rel="noreferrer"
                  className="mainLink"
                >
                  Подробнее →
                </a>
              </div>
            ))}
        </div>
      </div>
    </Container>
  );
}

export default AddNews;
