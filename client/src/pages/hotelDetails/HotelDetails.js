import { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'

import Section from "../../components/section/Section"
import PageTitle from "../../components/pageTitle/PageTitle"
import PageText from "../../components/pageText/PageText"
import Rate from '../../components/rate/Rate'
import Card from '../../components/card/Card'
import Comments from '../../components/comments/Comments'
import PrimaryTextarea from "../../components/primaryTextarea/PrimaryTextarea"
import PrimaryButton from "../../components/primaryButton/PrimaryButton"
import SecondaryButton from "../../components/secondaryButton/SecondaryButton"

import { getHotelById } from '../../services/api/hotels'
import { createFeedback } from '../../services/api/feedback'

import LeftArrowIcon from '../../assets/svgs/arrow-left-solid.svg'

const HotelDetails = () => {
  const history = useHistory()
  const { id } = useParams()
  
  const [hotel, setHotel] = useState({})
  const [feedback, setFeedback] = useState({ hotel_id: id, rate: null, comment: '' })

  const onChanage = (key, value) => setFeedback({ ...feedback, [key]: value })
  const shareFeedback = async () => {
    try {
      const { created_at, feedback_id } = await createFeedback(feedback)
      const newFeedback = {
        message: feedback.comment,
        rate: feedback.rate,
        created_at,
        feedback_id
      }

      setHotel({ ...hotel, comments: [...hotel.comments, newFeedback] })
      setFeedback({ ...feedback, rate: null, comment: '' })
    } catch (error) {
      console.log(error.messge)
    }
  }
  
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
      <SecondaryButton className="mb-6" onClick={() => history.push('/')}>
        <img style={{ width: '22px', height: '22px' }} src={LeftArrowIcon} alt="Button" />
      </SecondaryButton>
      <Rate rate={hotel.rate} />
      <PageTitle title={hotel.name} />
      <PageText className="mt-4 mb-10" text={hotel.description} />
      <Comments comments={hotel.comments} />
      <Card title="Leave feedback" className="mt-14">
        <PrimaryTextarea
          label="Comment"
          width="500"
          value={feedback.comment}
          onChange={e => onChanage('comment', e.target.value)} />
        <Rate
          className="mt-4 mb-4"
          rate={feedback.rate}
          onChange={e => onChanage('rate', e)} />
        <PrimaryButton onClick={shareFeedback}>Share</PrimaryButton>
      </Card>
    </Section>
  )
}

export default HotelDetails