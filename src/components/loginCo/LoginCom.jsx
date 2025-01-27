import BravoSvg from "../../assets/svg/bravo.svg";
import Telegram from "../../assets/svg/tg.svg";
import WhatsApp from "../../assets/svg/whatsapp.svg";
import BgContact from "../../assets/svg/telefon.svg";
import React, { memo } from "react";

const LoginCom = () => {
  return (
    <>
      <section
        style={{
          height: "scr",
          backgroundImage: `url(${BgContact})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container">
          <div className="form_wrapper">
            <div className="telefon_form1">
              <h3>Только телефон, и мы в деле</h3>
              <p>
                Специалист перезвонит Вам в течение 5 минут, в рабочее время для
                уточнения деталей
              </p>
              <input type="number" placeholder="+7 (927) 666-52-97" />
              <button className="telefon_button" type="button">
                Получить консультацию
              </button>
              <p>
                Нажимая на кнопку вы соглашаетесь с условиями Политики
                конфиденциальности
              </p>
              <h4>Связаться с нами через мессенджер</h4>
              <div className="whatsapp_and_tg">
                <div className="tg cursor-pointer">
                  <img src={WhatsApp} alt="" />
                  <p>Whatsapp</p>
                </div>

                <div className="tg cursor-pointer">
                  <img src={Telegram} alt="" />
                  <p>Telegram</p>
                </div>
              </div>
            </div>

            <div className="telefon_form2">
              <h2>Точный расчет стоимости уже через 1 час</h2>
              <div className="tf_inside_div">
                <img src={BravoSvg} alt="" />
                <p>
                  Расскажем какие автомобили вы можете купить с наибольшей
                  выгодой.
                </p>
              </div>

              <div className="tf_inside_div">
                <img src={BravoSvg} alt="" />
                <p>
                  Расскажем какие автомобили вы можете купить с наибольшей
                  выгодой.
                </p>
              </div>

              <div className="tf_inside_div">
                <img src={BravoSvg} alt="" />
                <p>
                  Расскажем какие автомобили вы можете купить с наибольшей
                  выгодой.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default memo(LoginCom);
