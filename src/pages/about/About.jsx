import React from 'react'
import AboutImg from '../../assets/svg/about.svg'
import A11 from '../../assets/svg/a11.svg'
import A22 from '../../assets/svg/a22.svg'
import A33 from '../../assets/svg/a33.svg'
import o1 from '../../assets/svg/o1.svg'
import o2 from '../../assets/svg/o2.svg'
import o3 from '../../assets/svg/o3.svg'
import o4 from '../../assets/svg/o4.svg'
import o5 from '../../assets/svg/o5.svg'
import o6 from '../../assets/svg/o6.svg'

const About = () => {
  return (
    <>
      <section className="about">
        <div className="container">
          <div className="about_left_and_right">
            <div className="about_left_left">
              <img src={AboutImg} alt="" />
            </div>

            <div className="about_left_right">
              <h2>О нас</h2>
              <h3>
                Мы автосалон и официальный партнер крупнейших мировых
                авто-аукционов: IAA (Insurance Auto Auction), Copart, Manheim.
              </h3>
              <div className="about_inside1">
                <img src={A11} alt="" />
                <h3>Работаем без посредников</h3>
              </div>

              <div className="about_inside1">
                <img src={A22} alt="" />
                <h3>Успешный опыт 10 лет</h3>
              </div>

              <div className="about_inside1">
                <img src={A33} alt="" />
                <h3>Отлаженная логистика</h3>
              </div>

              <h4>
                Мы берем на себя полное сопровождение сделки до передачи
                автомобиля в руки клиенту.
              </h4>

              <button className="about_button" type="button">
                Оставить заявку
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* our */}

      <section className="our">
        <div className="container">
          <div className="our_title">
            <h2>Наши гарантии</h2>
          </div>

          <div className="our_cards">
            <div className="our_card">
              <div className="card_inside">
                <img src={o1} alt="" />
              </div>

              <div className="card_inside">
                <h3>100% возврат предоплаты</h3>
              </div>
            </div>

            <div className="our_card">
              <div className="card_inside">
                <img src={o2} alt="" />
              </div>

              <div className="card_inside">
                <h3>Работаем по договору</h3>
              </div>
            </div>

            <div className="our_card">
              <div className="card_inside">
                <img src={o3} alt="" />
              </div>

              <div className="card_inside">
                <h3>Договор без мелкого шрифта</h3>
              </div>
            </div>

            <div className="our_card">
              <div className="card_inside">
                <img src={o4} alt="" />
              </div>

              <div className="card_inside">
                <h3>Оплата в кассу нашего автосалона или на р/с компании</h3>
              </div>
            </div>

            <div className="our_card">
              <div className="card_inside">
                <img src={o5} alt="" />
              </div>

              <div className="card_inside">
                <h3>Качество автомобиля</h3>
              </div>
            </div>

            <div className="our_card">
              <div className="card_inside">
                <img src={o6} alt="" />
              </div>

              <div className="card_inside">
                <h3>На всех этапах сделки - автомобили застрахованы</h3>
              </div>
            </div>
          </div>

          <div className="bottom_of_our_cards">
            <div className="insert">
              <h3>
                Вы можете убедиться в прозрачности сделки скачав предварительный
                договор
              </h3>
            </div>

            <div className="insert">
              <p>Скачать пример договора</p>
            </div>
          </div>

         
        </div>
      </section>
    </>
  );
}

export default About