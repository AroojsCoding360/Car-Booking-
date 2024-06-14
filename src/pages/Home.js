import React from 'react';
import bg1 from '../assets/images/bg_1.jpg';
import car1 from '../assets/images/car-1.jpg';
import car2 from '../assets/images/car-4.jpg';
import car3 from '../assets/images/car-3.jpg';


// Sample data for featured vehicles
const featuredVehicles = [
  {
    id: 1,
    name: 'Mercedes Grand Sedan',
    price: '$250 per day',
    image: car1,
  },
  {
    id: 2,
    name: 'BMW Series 5',
    price: '$300 per day',
    image: car2,
  },
  {
    id: 3,
    name: 'Audi A7',
    price: '$350 per day',
    image: car3,
  },
];

function Home() {
  return (
    <div>
      <header className="bg-dark text-white text-center py-4">
        <img src={bg1} className="img-fluid" alt="Banner" />
        <h1>Fast & Easy Way To Rent A Car</h1>
        <p>Find the best deals for car rentals in your area.</p>
      </header>

      <section className="container my-4">
        <form id="searchForm" className="form-inline justify-content-center">
          <div className="form-group mb-2">
            <label htmlFor="pickupLocation" className="sr-only">Pick-up Location</label>
            <input type="text" className="form-control" id="pickupLocation" placeholder="Pick-up Location" />
          </div>
          <div className="form-group mx-sm-3 mb-2">
            <label htmlFor="dropoffLocation" className="sr-only">Drop-off Location</label>
            <input type="text" className="form-control" id="dropoffLocation" placeholder="Drop-off Location" />
          </div>
          <div className="form-group mx-sm-3 mb-2">
            <label htmlFor="pickupDate" className="sr-only">Pick-up Date</label>
            <input type="date" className="form-control" id="pickupDate" />
          </div>
          <div className="form-group mx-sm-3 mb-2">
            <label htmlFor="dropoffDate" className="sr-only">Drop-off Date</label>
            <input type="date" className="form-control" id="dropoffDate" />
          </div>
          <button type="submit" className="btn btn-primary mb-2">Search</button>
        </form>
      </section>

      <section className="container">
        <h2 className="text-center my-4">Featured Vehicles</h2>
        <div className="row">
          {featuredVehicles.map(vehicle => (
            <div className="col-md-4" key={vehicle.id}>
              <div className="card mb-4">
                <img src={vehicle.image} className="card-img-top" alt={vehicle.name}  />
                <div className="card-body">
                  <h5 className="card-title">{vehicle.name}</h5>
                  <p className="card-text">{vehicle.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-light py-5">
        <div className="container">
          <div className="text-center">
            <h2>Welcome to Carbook</h2>
            <p>Your reliable partner for car rentals.</p>
            <a href="/" className="btn btn-success">Learn More</a>
          </div>
        </div>
      </section>

      <section className="container my-4">
        <h2 className="text-center my-4">Our Latest Services</h2>
        <div className="row text-center">
          <div className="col-md-3">
            <i className="fas fa-car fa-2x"></i>
            <h4>Affordable Cars</h4>
            <p>Choose from a wide range of affordable vehicles.</p>
          </div>
          <div className="col-md-3">
            <i className="fas fa-user-tie fa-2x"></i>
            <h4>Chauffeur Service</h4>
            <p>Professional drivers for your convenience.</p>
          </div>
          <div className="col-md-3">
            <i className="fas fa-plane fa-2x"></i>
            <h4>Airport Transfer</h4>
            <p>Reliable and on-time airport transfers.</p>
          </div>
          <div className="col-md-3">
            <i className="fas fa-tools fa-2x"></i>
            <h4>Vehicle Maintenance</h4>
            <p>Top-notch maintenance for all rental vehicles.</p>
          </div>
        </div>
      </section>

      <section className="container my-4">
        <h2 className="text-center my-4">Recent Blog</h2>
        <div className="row">
          <div className="col-md-12">
            <div className="card mb-4">
              <img src="path_to_image" className="card-img-top" alt="Blog Post" />
              <div className="card-body">
                <h5 className="card-title">Title of the Blog Post</h5>
                <p className="card-text">Short description of the blog post.</p>
                <a href="/" className="btn btn-primary">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-dark text-white text-center py-4">
        <div className="container">
          <p>© 2024 Carbook. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;