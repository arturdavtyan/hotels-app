import { useState, useEffect } from "react"

import { getAllHotels } from '../../api/hotels'

const Hotels = () => {
  const [hotels, setHotels] = useState([])

  useEffect(() => {
    (async () => {
      try {
        const { data } = await getAllHotels()
        setHotels(data)
      } catch (error) {
        console.log(error.message)
      }
    })()
  }, [])

  return (
    <div>
      <ul>
        {
          hotels.map(hotel => {
            return (
              <li key={hotel.hotel_id}>{ hotel.name }</li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default Hotels