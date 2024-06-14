import React from 'react';
import car1 from '../assets/images/car-1.jpg';
import car2 from '../assets/images/car-4.jpg';
import car3 from '../assets/images/car-3.jpg';

const Cars = () => {
  const cars = [
    { name: 'Mercedes Grand Sedan', price: 500, image: car1 },
    { name: 'Range Rover', price: 500, image: car2 },
    { name: 'BMW', price: 500, image: car3 },
  ];

  return (
    <div className="container mt-5 pt-5">
      <h2 className="text-center">Choose Your Car</h2>
      <div className="row">
        {cars.map((car, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card">
              <img src={car.image} className="card-img-top" alt={car.name} />
              <div className="card-body">
                <h5 className="card-title">{car.name}</h5>
                <p className="card-text">${car.price}/day</p>
                <a href="/" className="btn btn-primary">Book now</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cars;