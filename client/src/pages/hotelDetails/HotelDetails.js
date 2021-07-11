import { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'

import Section from "../components/section/Section"
import PageTitle from "../components/pageTitle/PageTitle"
import PageText from "../components/pageText/PageText"
import Rate from '../../components/rate/Rate'
import Comments from '../../components/comments/Comments'
// import PrimaryInput from "../../components/primaryInput/PrimaryInput"
// import PrimaryTextarea from "../../components/primaryTextarea/PrimaryTextarea"
// import PrimaryButton from "../../components/primaryButton/PrimaryButton"

import { getHotelById } from '../../api/hotels'

const HotelDetails = () => {
  const [hotel, setHotel] = useState({})
  // const [rate, setRate] = useState(0)
  const history = useHistory()
  const { id } = useParams()

  // const onChanage = e => setRate(e)
  
  useEffect(() => {
    (async () => {
      try {
        const hotelData = await getHotelById(id)
        setHotel(hotelData)
      } catch (error) {
        console.log(error)
        history.push('/')
      }
    })()
  }, [])

  return (
    <Section>
      <Rate rate={hotel.rate} />
      {/* <Rate rate={rate} onChange={onChanage} /> */}
      <PageTitle
        className="mb-4"
        title={hotel.name} />
      <PageText text={hotel.description} />
      <Comments comments={hotel.comments} />
    </Section>
  )
}

export default HotelDetails