import { useEffect } from "react";
import { useState } from "react";
import { baseUrl } from "../../../utils/api";
import axios from "axios";
import CarCardSkleton from "../../../components/skleton/CarCardSkleton";

// Cars Images
import toyota_carollo from "../../../assets/img/toyota-carolla.jpg";
import honda_civil from "../../../assets/img/honda-civil.avif";
import ford_mustang from "../../../assets/img/ford-mustang.avif";
import chevrolet_equinox from "../../../assets/img/chevrolet-equinox.jpg";
import nissan_altima from "../../../assets/img/nissan-altima.jpg";
import bmw_m3 from "../../../assets/img/bmw-m3.jpg";
import tesla_model_3 from "../../../assets/img/tesla-model-3.jpg";
import audi_q5 from "../../../assets/img/audi-q5.avif";
import mers_e_class from "../../../assets/img/mers-e-class.jpg";

export default function Cars() {
  const [carsData, setCarsData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const carsImg = [
    toyota_carollo,
    honda_civil,
    ford_mustang,
    chevrolet_equinox,
    nissan_altima,
    bmw_m3,
    tesla_model_3,
    audi_q5,
    mers_e_class,
  ];

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${baseUrl}/cars`)
      .then((res) => {
        const first10data = res.data.slice(0, 9);
        setCarsData(first10data);
      })
      .catch((err) => console.error("Error:::", err))
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <section className="container">
      <div className="footer_title">
        <h2>Наши автомобили</h2>
      </div>
      <div className="car-card-wrapper">
        {!isLoading &&
          carsData.length &&
          carsData.map((el, idx) => {
            return (
              <div
                key={el.id}
                className="bg-white shadow-lg rounded-lg overflow-hidden w-96"
              >
                <div className="px-6 py-4 bg-gray-200 border-b">
                  <h2 className="text-2xl font-bold text-gray-800">
                    {el.make} {el.model}
                  </h2>
                </div>
                <img
                  src={carsImg[idx]}
                  alt={`${el.make} ${el.model}`}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <span className="font-semibold">Цвет:</span> {el.color}
                    </div>
                    <div>
                      <span className="font-semibold">Пробег :</span>{" "}
                      {el.mileage} км
                    </div>
                    <div>
                      <span className="font-semibold">Цена:</span> ${el.price}
                    </div>
                    {/* <div>
                      <span className="font-semibold">Тип топлива:</span>{" "}
                      {el.fuelType}
                    </div>
                    <div>
                      <span className="font-semibold">Коробка передач:</span>{" "}
                      {el.transmission}
                    </div>
                    <div>
                      <span className="font-semibold">Матор:</span> {el.engine}
                    </div>
                    <div>
                      <span className="font-semibold">Лошадиная сила:</span>{" "}
                      {el.horsepower}
                    </div>
                    <div>
                      <span className="font-semibold">Доступно в продаже:</span>{" "}
                      {el.owners}
                    </div> */}
                  </div>
                  {/* <div>
                    <h3 className="text-lg font-semibold mb-2">Особенности</h3>
                    <ul className="list-disc list-inside text-gray-700">
                      {el.features.length &&
                        el.features.map((ftr, idx) => {
                          <li key={idx}>{ftr}</li>;
                        })}
                    </ul>
                  </div> */}
                </div>
              </div>
            );
          })}
        {isLoading &&
          [...Array(10)].map((_, idx) => <CarCardSkleton key={idx} />)}
      </div>
    </section>
  );
}
