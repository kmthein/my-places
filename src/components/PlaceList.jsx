import React from 'react'
import PlaceItem from './PlaceItem'

const PlaceList = ({ places }) => {
  return (
    <>
      {
        places.length == 0 && <p className=' text-center mt-10 text-xl text-white/50'>No Places Found!</p>
      }
      {
        places && places.length > 0 && places.map((place) => (
          <PlaceItem key={place.id} id={place.id} title={place.title} description={place.description} image={place.imageUrl} address={place.address} />
        ))
      }
    </>
  )
}

export default PlaceList