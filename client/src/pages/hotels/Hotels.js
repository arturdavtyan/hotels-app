import { useState, useEffect } from "react"
import { useHistory } from "react-router"

import PrimaryButton from "../../components/primaryButton/PrimaryButton"
import Section from "../../components/section/Section"
import Hotel from "../../components/hotel/Hotel"
import Card from "../../components/card/Card"
import GoogleMap from "../../components/googleMap/GoogleMap"

import { getAllHotels } from '../../services/api/hotels'

import './Hotels.scss'

const Hotels = () => {
  const history = useHistory()
  const [hotels, setHotels] = useState([])
  const [center, setCenter] = useState({ lat: 0, lng: 0 })
  const [isReadyMap, setIsReadyMap] = useState(false)

  const changeRoute = path => history.push(path)

  useEffect(() => {
    (async () => {
      try {
        const { data } = await getAllHotels()
        
        const lats = data.map(hotel => hotel.latitude)
        const lngs = data.map(hotel => hotel.longitude)

        const maxLat = Math.max(...lats)
        const minLat = Math.min(...lats)
        const maxLng = Math.max(...lngs)
        const minLng = Math.min(...lngs)

        const avgLat = ((maxLat + minLat) / 2) || 0
        const avgLng = ((maxLng + minLng) / 2) || 0

        setCenter({ lat: avgLat, lng: avgLng })
        setHotels(data)
        setIsReadyMap(true)
      } catch (error) {
        console.log(error.message)
      }
    })()
  }, [])

  return (
    <Section>
      <PrimaryButton className="mb-10" onClick={() => changeRoute('/create')}>Create hotel</PrimaryButton>
      <div className="flex flex-wrap row">
        <div className="col col-left">
          { hotels.map(hotel => {
              return (
                <Card key={hotel.hotel_id} className="mb-8">
                  <Hotel hotel={hotel} />
                </Card>
              )
            }) }
        </div>
        <div className="col col-right">
          <Card title="Hotels">
            <GoogleMap
              isReadyMap={isReadyMap}
              center={center}
              hotels={hotels}
              changeRoute={changeRoute} />
          </Card>
        </div>
      </div>
    </Section>
  )
}

export default Hotels