import React, { useContext } from 'react'
import { MediaContext } from '../MediaContext/MediaContext';
import MediaItem from '../MediaItem/MediaItem';

export default function Tv() {

  let { filteredTv } = useContext(MediaContext);
 
  return (
    <>
      <div className='container mt-5'>
        <div className="row py-5 justify-content-center">
          {filteredTv?.map((item, index) => <MediaItem key={index} item={item} />)}
        </div>
      </div>
    </>
  )
}
