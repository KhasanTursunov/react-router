import React from 'react'
import footerIcon1 from "../../assets/svg/footer1.svg";
import footerIcon2 from "../../assets/svg/footer2.svg";
import footerIcon3 from "../../assets/svg/footer3.svg";

const ContactComponent = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer_title">
            <h2>Наши контакты</h2>
          </div>

          <div className="footer_divs">
            <div className="footer_div">
              <p>Адрес:</p>
              <h3>428000, г. Чебоксары, Марпосадское шоссе, 14.</h3>
            </div>

            <div className="footer_div">
              <p>Время работы:</p>
              <h3>Ежедневно 10:00 до 19:00</h3>
            </div>

            <div className="footer_div">
              <p>Телефон:</p>
              <a href="tel:89279971242">8 927 997 12 42</a>
              <a href="tel:89279971242">8 927 997 12 42</a>
            </div>

            <div className="footer_div">
              <p>E-mail:</p>
              <a href="mailto:carmark21@auto.ru">carmark21@auto.ru</a>
            </div>

            <div className="footer_div">
              <p>Соц. сети:</p>
              <div className="footer_inside_div">
                <a href="https://t.me/khasan_tursunov_9931">  
                <img src={footerIcon1} alt="" />
                <img src={footerIcon2} alt="" />
                <img src={footerIcon3} alt="" />
                </a>
              </div>
            </div>
          </div>

          <div className="map">
            <iframe
              className="googlemap"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2245.372097374423!2d37.59702987644051!3d55.75203809205048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a4da92e13c9%3A0x87bee5d13fec9ba!2sMegastroy!5e0!3m2!1sen!2s!4v1727493375869!5m2!1sen!2s"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </footer>
    </>
  );
}

export default ContactComponent;