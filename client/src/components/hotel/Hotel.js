import { Link } from "react-router-dom"

import Rate from "../rate/Rate"

import './Hotel.scss'

const Hotel = ({ hotel }) => {
  return (
    <div className="hotel">
      <Rate rate={hotel.rate} size="20" />
      <div className="mt-4">
        <Link className="hotel__link" to={`/hotels/${hotel.hotel_id}`}>{ hotel.name }</Link>
      </div>
    </div>
  )
}

export default Hotel