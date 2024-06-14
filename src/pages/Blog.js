import React from 'react';
import blog1 from '../assets/images/image_1.jpg';
import blog2 from '../assets/images/image_2.jpg';

const Blog = () => {
  const posts = [
    { title: 'Tips for Renting a Car', date: '2024-06-09', image: blog1 },
    { title: 'Top Road Trip Destinations', date: '2024-06-08', image: blog2 },
  ];

  return (
    <div className="container mt-5 pt-5">
      <h2 className="text-center">Recent Blog Posts</h2>
      <div className="row">
        {posts.map((post, index) => (
          <div key={index} className="col-md-6 mb-4">
            <div className="card">
              <img src={post.image} className="card-img-top" alt={post.title} />
              <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">{post.date}</p>
                <a href="/" className="btn btn-primary">Read more</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;