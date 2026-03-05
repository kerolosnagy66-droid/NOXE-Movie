import React, { useContext } from 'react'
import { MediaContext } from '../MediaContext/MediaContext';
import MediaItem from '../MediaItem/MediaItem';

export default function People() {

  let { filteredPeople } = useContext(MediaContext);
 
  return (
    <>
      <div className='container mt-5'>
        <div className="row py-5 justify-content-center">
          {filteredPeople?.map((item, index) => <MediaItem key={index} item={item} />)}
        </div>
      </div>
    </>
  )
}
