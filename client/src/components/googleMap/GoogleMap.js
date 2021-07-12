import { useState } from 'react'
import GoogleMapReact from 'google-map-react'
import HotelMarker from "../hotelMarker/HotelMarker"

const GoogleMap = ({ isReadyMap, hotels, center, changeRoute }) => {
  const [currentHoverComponent, setCurrentHoverComponent] = useState(null)

  const zoom = 14
  
  const changeRouteHandler = id => changeRoute(`/hotels/${id}`)

  const onHover = id => setCurrentHoverComponent(id)
  const onLeave = id => setCurrentHoverComponent(null)

  return (
    <div style={{ width: '100%', height: '400px' }}>
      { isReadyMap &&
        <GoogleMapReact
          defaultCenter={center}
          defaultZoom={zoom}
          onChildClick={changeRouteHandler}
          onChildMouseEnter={onHover}
          onChildMouseLeave={onLeave}>
            { hotels.map(hotel => (
              <HotelMarker
                key={hotel.hotel_id}
                hotelID={hotel.hotel_id}
                currentHoverComponent={currentHoverComponent}
                lat={hotel.latitude}
                lng={hotel.longitude}
                hotelName={hotel.name} />
            )) }
        </GoogleMapReact> }
    </div>
  )
}

export default GoogleMap