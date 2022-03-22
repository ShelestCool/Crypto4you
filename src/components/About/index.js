import * as React from "react";
import { Container } from "react-bootstrap";

import "./style.css";

const About = () => {
  return (
    <div>
      <Container>
        <h1>О нас</h1>
        <p>
          Crypto4you - первый русскоязычный информационный сайт и форум о
          криптовалютах. Мы работаем с июня 2011 года, когда в России только
          зарождалось сообщество биткоина и криптовалют, и приложили много сил к
          его созданию и развитию.
        </p>

        <p>
          Основанный энтузиастами биткоина как независимый ресурс для всех, кто
          желает получать грамотную и объективную информацию, Bits.media стал
          одним из ведущих специализированных новостных и аналитических сайтов о
          криптовалютах и блокчейне на русском языке.
        </p>

        <p>
          Мы всегда даем нашим читателям только объективную и проверенную
          информацию, так как имеем огромный опыт и экспертизу в деле, которым
          занимаемся. Мы отлично знаем, как работают криптовалюты и внимательно
          следим за всем, что имеет отношение к их прошлому, настоящему и
          будущему.
        </p>

        <p>
          К нашему мнению прислушиваются, и мы ценим внимание и интерес наших
          читателей. Вы всегда можете обратиться к нам с замечаниями и
          предложениями по улучшению нашей работы, рассказать о своем проекте,
          представить свой материал или попросить нас написать статью на
          интересующую вас тему.
        </p>

        <div>
          <h2>Контакты</h2>
          <p>Форма обратной связи!</p>
        </div>
      </Container>
    </div>
  );
};
export default About;
