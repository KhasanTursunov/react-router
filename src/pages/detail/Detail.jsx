import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { baseUrl } from "../../utils/api";
import toyota_carollo from "../../assets/img/toyota-carolla.jpg";
import honda_civil from "../../assets/img/honda-civil.avif";
import ford_mustang from "../../assets/img/ford-mustang.avif";
import chevrolet_equinox from "../../assets/img/chevrolet-equinox.jpg";
import nissan_altima from "../../assets/img/nissan-altima.jpg";
import bmw_m3 from "../../assets/img/bmw-m3.jpg";
import tesla_model_3 from "../../assets/img/tesla-model-3.jpg";
import audi_q5 from "../../assets/img/audi-q5.avif";
import mers_e_class from "../../assets/img/mers-e-class.jpg";

const Detail = () => {
  const { id } = useParams();
  const [carDetails, setCarDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCarDetails = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${baseUrl}/cars/${id}`);

        if (!response.ok) {
          throw new Error(
            `Failed to fetch car details. Status: ${response.status}`
          );
        }

        const data = await response.json();
        setCarDetails(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCarDetails();
  }, [id]);

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

  if (loading) return <p>Loading car details...</p>;
  if (error) return <p>Error: {error}</p>;
return (
  <div className="flex items-center justify-center min-h-screen p-4">
    <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 w-full max-w-sm">
      <img
        src={carsImg[carDetails.id - 1]}
        alt={`${carDetails.make} ${carDetails.model}`}
        className="w-full h-64 object-cover"
      />
      <div className="px-6 py-4 bg-gray-200 border-b">
        <h2 className="text-2xl font-bold text-gray-800 hover:text-blue-600 transition-colors duration-300">
          {carDetails.make} {carDetails.model}
        </h2>
      </div>
      <div className="grid grid-cols-2 gap-4 p-4">
        <div className="text-gray-700">
          <span className="font-semibold">Цвет:</span> {carDetails.color}
        </div>
        <div className="text-gray-700">
          <span className="font-semibold">Пробег:</span> {carDetails.mileage} км
        </div>
        <div className="text-gray-700">
          <span className="font-semibold">Цена:</span> ${carDetails.price}
        </div>
        <div className="text-gray-700">
          <span className="font-semibold">Тип топлива:</span> {carDetails.fuelType}
        </div>
        <div className="text-gray-700">
          <span className="font-semibold">Коробка передач:</span> {carDetails.transmission}
        </div>
        <div className="text-gray-700">
          <span className="font-semibold">Мотор:</span> {carDetails.engine}
        </div>
        <div className="text-gray-700">
          <span className="font-semibold">Лошадиная сила:</span> {carDetails.horsepower}
        </div>
        <div className="text-gray-700">
          <span className="font-semibold">Доступно в продаже:</span> {carDetails.owners}
        </div>
      </div>
    </div>
  </div>
);
};

export default Detail;



