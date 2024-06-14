import React from 'react';

const Pricing = () => {
  const prices = [
    { name: 'Mercedes Grand Sedan', perHour: 10.99, perDay: 60.99, perMonth: 995.99 },
    { name: 'Range Rover', perHour: 10.99, perDay: 60.99, perMonth: 995.99 },
    { name: 'BMW', perHour: 10.99, perDay: 60.99, perMonth: 995.99 },
  ];

  return (
    <div className="container mt-5 pt-5">
      <h2 className="text-center">Pricing</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Car</th>
            <th>Per Hour Rate</th>
            <th>Per Day Rate</th>
            <th>Leasing Rate</th>
          </tr>
        </thead>
        <tbody>
          {prices.map((price, index) => (
            <tr key={index}>
              <td>{price.name}</td>
              <td>${price.perHour}</td>
              <td>${price.perDay}</td>
              <td>${price.perMonth}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Pricing;