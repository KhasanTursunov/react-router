import ShowcaseImg from '../../assets/svg/showcase.svg'


const Showcase = () => {
  return (
    <>
      <section className="showcase">
        <div className="container">
          <div className="showcase_left_and_right">
            <div className="showcase_left">
              <h1>Купите автомобиль дешевле на 60%*</h1>
              <h3>
                Привезем автомобиль под ключ со всеми документами. Подбор
                автомобиля под любой запрос БЕСПЛАТНО
              </h3>
              <button className="showcase_btn" type="button">
                Оставить заявку
              </button>
            </div>

            <div className="showcase_right">
              <img src={ShowcaseImg} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Showcase