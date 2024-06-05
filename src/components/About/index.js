import React from "react";
import { Container } from "react-bootstrap";
import emailjs from "emailjs-com";

import "./about.css";
import aboutMail from "../../img/aboutMail.png"
import { Link } from "react-router-dom";

const About = () => {

    function sendEmail(e) {
      e.preventDefault();

      emailjs.sendForm('service_3ga5twl', 'template_qevxp03', e.target, 'sadl_bsEMJ13vyoX7')
      .then(function() {
        alert('SUCCESS!');

      }, function(error) {
        console.log('FAILED...', error);
      });

      document.getElementById('myForm').reset();
      }

  return (
    <div>
      <Container className="mainBlockAbout">
        <h2 className="headerh2"><strong>О нас</strong></h2>
        <p>
          <b>Blockchain</b> - русскоязычный информационный сайт и форум о
          криптовалютах.
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

        <Link to="/certificate">Справка</Link>

        <div>
          <h3 className="headerh3">Контакты</h3>
          <div className="aboutContacts">
            <div>
              <img src={aboutMail} alt="img" className="imgMailAbout"/>
            </div>
           
            <div>
              <p>По стратегическому партнерству и техническим вопросам<br/>
              <span className="contactsMailsAbout">admin@blockchain.com</span></p>
            </div>
          </div>

          <div className="aboutContacts">
            <div>
              <img src={aboutMail} alt="img" className="imgMailAbout"/>
            </div>

            <div>
              <p>По информационному партнерству, размещению рекламных статей, новостей и пресс-релизов<br/> <span className="contactsMailsAbout">content@blockchain.com</span></p>
            </div>
          </div>

          <div className="aboutContacts">
            <div>
              <img src={aboutMail} alt="img" className="imgMailAbout"/>
            </div>

            <div>
              <p>По вопросам размещения баннеров и рекламы на форуме<br/> <span className="contactsMailsAbout">contacts@blockchain.com</span></p>
            </div>
          </div>
        </div>

        <div className="mailForm">
          <h3 className="mt-4" align="center">Оставьте нам сообщение</h3>
          <form onSubmit={sendEmail} id="myForm">
            <div className="divInputs">
              <input type="text" name="name" placeholder="Ваше имя..." required/>
              <input type="email" name="user_email" placeholder="E-mail..." required/>
            </div>

            <textarea name="message" placeholder="Ваше сообщение..." className="inputTextarea"/>

            <div className="divBtnSubmit">
              <button type="submit" className="btnSubmit">Отправить</button>
            </div>
          </form>
        </div>
      </Container>
    </div>
  );
};
export default About;
