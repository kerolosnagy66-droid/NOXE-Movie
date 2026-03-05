import React, { useContext } from 'react'
import { MediaContext } from '../MediaContext/MediaContext';
import MediaItem from '../MediaItem/MediaItem';

export default function Home() {

  let { filteredMovies, filteredTv, filteredPeople } = useContext(MediaContext);

  return (
    <>
      <div className='container mt-5'>
        <div className="row py-5">
          <div className="col-md-4 d-flex align-items-center">
            <div className='w-100'>
              <div className="brdr w-25 mb-3"></div>
              <h2 className='h3'>Trending <br /> Movies <br /> To Watch Now</h2>
              <p style={{ color: '#64748b', fontWeight: '500' }}> Most watched movies by day</p>  
              <div className="brdr w-100 mt-3"></div>
            </div>
          </div>
          {filteredMovies?.slice(0, 10).map((item, index) => <MediaItem key={index} item={item} />)}
        </div>

        <div className="row py-5">
          <div className="col-md-4 d-flex align-items-center">
            <div className='w-100'>
              <div className="brdr w-25 mb-3"></div>
              <h2 className='h3'>Trending <br /> TV <br /> To Watch Now</h2>
                <p style={{ color: '#64748b', fontWeight: '500' }}> Most watched TV by day</p>  
              <div className="brdr w-100 mt-3"></div>
            </div>
          </div>
          {filteredTv?.slice(0, 10).map((item, index) => <MediaItem key={index} item={item} />)}
        </div>

        <div className="row py-5">
          <div className="col-md-4 d-flex align-items-center">
            <div className='w-100'>
              <div className="brdr w-25 mb-3"></div>
              <h2 className='h3'>Trending <br /> People <br /> To Watch Now</h2>
                <p style={{ color: '#64748b', fontWeight: '500' }}> Most watched People by day</p>  
              <div className="brdr w-100 mt-3"></div>
            </div>
          </div>
          {filteredPeople?.slice(0, 10).map((item, index) => <MediaItem key={index} item={item} />)}
        </div>

      </div>
    </>
  )
}
