import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Art from './assets/Art.jpg'
import Sport from './assets/sport.jpeg'
import Tech from './assets/technology.jpg'
import { useNavigate } from 'react-router-dom';


const FindInterest = () => {
        const navigate = useNavigate();

    const handleArt = () => {
        navigate('/events');
    }

    const handleTech = () => {
        navigate('/events');
    }

    const handleSport = () => {
        navigate('/events');
    }

    const events = [
        { id: 1, title: 'Technology', img: Tech , handle: handleTech},
        { id: 2, title: 'Arts and Crafts', img: Art, handle: handleArt} ,
        { id: 3, title: 'Sports', img: Sport , handle: handleSport},
    ];
    
  return (
    <div>
      <header className="navbar navbar-dark bg-dark shadow-sm" data-bs-theme="dark">
        <div className="container">
          <a href="#" className="navbar-brand d-flex align-items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" aria-hidden="true" className="me-2" viewBox="0 0 24 24">
              <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
              <circle cx="12" cy="13" r="4" />
            </svg>
            <strong>TRYBE</strong>
          </a>
        </div>
      </header>

      <main>
        <section className="py-5 text-center container">
          <div className="row py-lg-5">
            <div className="col-lg-6 col-md-8 mx-auto">
              <h1 className="fw-light">TRYBE</h1>
              <p className="lead text-body-secondary">Connect, Discover, Meet.</p>
            </div>
          </div>
        </section>

        <div className="album py-5 bg-body-tertiary">
          <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              {events.map(event => (
                <div className="col" key={event.id}>
                  <div className="card shadow-sm">
                    <img src={event.img} className="card-img-top" alt={event.title} />
                    <div className="card-body">
                      <p className="card-text">{event.title}</p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                          <button type="button" className="btn btn-sm btn-outline-secondary" onClick={event.handle}>View</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <footer className="text-body-secondary py-5">
        <div className="container">
          <p className="float-end mb-1">
            <a href="#">Back to top</a>
          </p>
          <p className="mb-1">TRYBE</p>
        </div>
      </footer>
    </div>
  );
};

export default FindInterest;
