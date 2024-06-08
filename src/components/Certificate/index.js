import { Container } from "react-bootstrap";

import "./index.css";

const Certificate = () => {
  return (
      <Container>
        <div className="aboutProg">
          <div className="aboutProg2">
            <p><b>О программе:</b> Веб-приложение «Blockchain»</p>
            <p><b>Создатель:</b> Зыль Илья Александрович </p>
            <p><b>Группа:</b> МГКЦТ 54  ТП</p>
          </div>
        </div>


        <div className="certificate">
          <p>
            Наше веб-приложение «<b>Blockchain</b>» для крипто заметок предлагает вам удобный и безопасный способ управления вашими активами. Мы всегда даем нашим читателям только объективную и проверенную информацию, так как имеем огромный опыт и экспертизу в деле, которым занимаемся. Мы отлично знаем, как работают криптовалюты и внимательно следим за всем, что имеет отношение к их прошлому, настоящему и будущему.
          </p>
          <p>Вот основные преимущества использования нашего сервиса: </p>
          <ul>
            <li>
            Удобство использования: Вы можете создавать, редактировать и хранить свои заметки в любое время и с любого устройства.
            </li>

            <li>
            Безопасность данных: Ваши заметки шифруются с использованием передовых криптографических методов, обеспечивая максимальную защиту ваших данных.
            </li>

            <li>
            Синхронизация: Автоматическая синхронизация заметок между всеми вашими устройствами.
            </li>

            <li>
            Удобный поиск: удобный поиск для поиска интересующих вас криптовалют.
            </li>
          </ul>

          <p>
          Наше веб-приложение создано, чтобы сделать процесс ведения заметок простым, безопасным и удобным. Попробуйте и убедитесь сами!
          </p>
        </div>
      </Container>
  );
};

export default Certificate;