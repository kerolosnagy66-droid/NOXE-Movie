import React from 'react';

export default function About() {
  const features = [
    { icon: 'fa-film text-info', title: 'Extensive Library', desc: 'Access a massive collection of movies and TV shows from around the world, updated daily.' },
    { icon: 'fa-star text-warning', title: 'Trending Content', desc: "Stay updated with what's popular and trending right now in the entertainment industry." },
    { icon: 'fa-users text-primary', title: 'Celebrity Insights', desc: 'Get detailed information about your favorite actors, directors, and industry professionals.' },
    { icon: 'fa-search text-success', title: 'Smart Search', desc: "Find exactly what you're looking for with our powerful and intuitive search functionality." }
  ];

  const pStyle = { color: '#64748b', fontWeight: '500' };

  return (
    <div className='container my-5 py-5 text-white'>
      <div className="row g-4 align-items-center">
        <div className="col-md-4">
          <div className="brdr w-25 mb-3"></div>
          <h2 className='h1 fw-bold'>About <br /> Our Movie <br /> Platform</h2>
          <p style={pStyle}>Our ultimate destination for trending movies, TV shows, and celebrities.</p>
          <div className="brdr w-100 mt-3"></div>
        </div>
        
        <div className="col-md-8">
          <div className="row g-4">
            {features.map((f, i) => (
              <div key={i} className="col-md-6">
                <div className="p-4 rounded-3 shadow-sm bg-dark bg-opacity-25 h-100 border border-secondary border-opacity-25 ripple-effect">
                  <i className={`fas ${f.icon} fa-2x mb-3`}></i>
                  <h3 className='h5'>{f.title}</h3>
                  <p style={pStyle}>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="row mt-5 pt-5 text-center">
        <div className="col-12">
          <div className="brdr w-25 mx-auto mb-4"></div>
          <h2 className='h2 mb-4'>Our Mission</h2>
          <p style={pStyle} className='col-md-8 mx-auto lead'>
            Our mission is to provide movie enthusiasts with a seamless and enjoyable experience to discover, 
            explore, and stay connected with the world of cinema. We believe that great stories bring people together, 
            and we're here to help you find your next favorite story.
          </p>
        </div>
      </div>
    </div>
  );
}