import React from 'react';

const Services = () => {
  const services = [
    { icon: 'fas fa-car', title: 'Car Rental', description: 'Reliable and affordable car rental services.' },
    { icon: 'fas fa-tools', title: 'Car Maintenance', description: 'Top-notch car maintenance services.' },
    { icon: 'fas fa-road', title: 'Roadside Assistance', description: '24/7 roadside assistance for emergencies.' },
  ];

  return (
    <div className="container mt-5 pt-5">
      <h2 className="text-center">Our Services</h2>
      <div className="row">
        {services.map((service, index) => (
          <div key={index} className="col-md-4 text-center mb-4">
            <div className="card">
              <div className="card-body">
                <i className={`${service.icon} fa-3x mb-3`}></i>
                <h5 className="card-title">{service.title}</h5>
                <p className="card-text">{service.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;