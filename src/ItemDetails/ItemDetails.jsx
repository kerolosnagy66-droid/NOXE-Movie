import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function ItemDetails() {
  const { id, media_type } = useParams();
  const [details, setDetails] = useState(null);

  async function getItemDetails(mediaType, id) {
    let { data } = await axios.get(`https://api.themoviedb.org/3/${mediaType}/${id}?api_key=f1aca93e54807386df3f6972a5c33b50`);
    setDetails(data);
  }

  useEffect(() => {
    getItemDetails(media_type, id);
  }, [id, media_type]);

  return (
    <div className="container py-5 mt-5">
      {details ? (
        <div className="row">
          <div className="col-md-4">
            <img
              className="w-100 rounded shadow"
              src={details.poster_path || details.profile_path 
                ? `https://image.tmdb.org/t/p/w500${(details.poster_path || details.profile_path).startsWith('/') ? '' : '/'}${details.poster_path || details.profile_path}`
                : `https://placehold.co/500x750?text=${media_type === 'person' ? 'No+Person+Image' : 'No+Image'}`
              }
              alt={details.title || details.name}
              onError={(e) => {
                const placeholder = `https://placehold.co/500x750?text=${media_type === 'person' ? 'No+Person+Image' : 'No+Image'}`;
                if (e.target.src !== placeholder) {
                  e.target.src = placeholder;
                }
              }}
            />
          </div>
          <div className="col-md-8 d-flex flex-column justify-content-center">
            <h2 className="h1 border-bottom pb-2 mb-4">{details.title || details.name}</h2>
            <p className="lead text-muted">{details.tagline}</p>
            <div className="mb-4">
              {details.genres?.map((genre) => (
                <span key={genre.id} className="badge bg-info me-2 p-2">
                  {genre.name}
                </span>
              ))}
            </div>
            <div className="mb-3">
              <span className="fw-bold me-2">Vote Count:</span>
              <span className="text-info">{details.vote_count}</span>
            </div>
            <div className="mb-3">
              <span className="fw-bold me-2">Vote Average:</span>
              <span className="text-info">{details.vote_average?.toFixed(1)}</span>
            </div>
            <div className="mb-3">
              <span className="fw-bold me-2">Popularity:</span>
              <span className="text-info">{details.popularity?.toFixed(1)}</span>
            </div>
            {details.release_date && (
              <div className="mb-3">
                <span className="fw-bold me-2">Release Date:</span>
                <span className="text-info">{details.release_date}</span>
              </div>
            )}
            <p className="mt-4 lh-lg">{details.overview || details.biography}</p>
          </div>
        </div>
      ) : (
        <div className="vh-100 d-flex justify-content-center align-items-center">
          <i className="fas fa-spinner fa-spin fa-5x text-info"></i>
        </div>
      )}
    </div>
  );
}
