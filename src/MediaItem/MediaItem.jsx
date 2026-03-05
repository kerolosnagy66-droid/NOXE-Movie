import React from 'react'
import { Link } from 'react-router-dom'

export default function MediaItem({ item }) {
  const isPerson = item.media_type === 'person' || !!item.profile_path;
  const imagePath = item.profile_path || item.poster_path;
  const placeholder = isPerson 
    ? 'https://placehold.co/500x750?text=No+Person+Image' 
    : 'https://placehold.co/500x750?text=No+Image';
  
  const initialImageSrc = imagePath 
    ? `https://image.tmdb.org/t/p/w500${imagePath.startsWith('/') ? '' : '/'}${imagePath}` 
    : placeholder;

  const handleImageError = (e) => {
    if (e.target.src !== placeholder) {
      e.target.src = placeholder;
    }
  };

  return (
    <div className='col-md-2 my-1'>
      <Link className='text-decoration-none text-white' to={`/itemdetails/${item.id}/${item.media_type}`}>
        <div className='item position-relative rounded overflow-hidden'>
          <div className="image-container" style={{ minHeight: '270px' }}>
            <img 
              className='w-100' 
              src={initialImageSrc || placeholder} 
              alt={item.title || item.name || 'Media Item'} 
              onError={handleImageError}
              style={{ display: 'block' }}
            />
          </div>
          <h3 className='h6 my-2 text-center px-1' style={{ minHeight: '35px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {item.title || item.name}
          </h3>
          {(item.vote_average !== undefined && item.vote_average !== null && item.vote_average > 0) ? (
            <div className='vote p-2 text-white position-absolute top-0 end-0 bg-info opacity-75'>
              {item.vote_average.toFixed(1)}
            </div>
          ) : ''}
        </div>
      </Link>
    </div>
  )
}
