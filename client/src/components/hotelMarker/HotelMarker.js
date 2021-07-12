import HotelIcon from '../../assets/svgs/hotel-solid.svg'
import './HotelMarker.scss'

const HotelMarker = ({ hotelName, currentHoverComponent, hotelID }) => {
  return (
    <div className="marker">
      { +hotelID === +currentHoverComponent && (
        <div className="popup">
          <span className="popup__text">{ hotelName }</span>
        </div>
      ) }
      <img src={HotelIcon} alt="Hotel icon"></img>
    </div>)
}

export default HotelMarker