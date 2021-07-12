import { useState  } from "react"
import { useHistory } from "react-router-dom"

import Section from "../../components/section/Section"
import PageTitle from "../../components/pageTitle/PageTitle"
import PrimaryInput from "../../components/primaryInput/PrimaryInput"
import PrimaryTextarea from "../../components/primaryTextarea/PrimaryTextarea"
import PrimaryButton from "../../components/primaryButton/PrimaryButton"
import SecondaryButton from "../../components/secondaryButton/SecondaryButton"

import { createHotel } from '../../services/api/hotels'

import LeftArrowIcon from '../../assets/svgs/arrow-left-solid.svg'

const CreateHotel = () => {
  const history = useHistory()
  const [newHotel, setNewHotel] = useState({
    name: '',
    description: '',
    latitude: null,
    longitude: null
  })

  const onChange = (key, value) => {
    setNewHotel({ ...newHotel, [key]: value})
  }
  const createHotelFnc = async () => {
    try {
      const { hotel_id } = await createHotel(newHotel)
      history.push(`/hotels/${hotel_id}`)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Section>
      <SecondaryButton onClick={() => history.push('/')}>
      <img style={{ width: '22px', height: '22px' }} src={LeftArrowIcon} alt="Button" />
      </SecondaryButton>
      <PageTitle
        className="mt-6 mb-12"
        title="Create hotel" />
      <PrimaryInput
        className="mb-10"
        label="Hotel Name"
        width="500"
        value={newHotel.name}
        onChange={e => onChange('name', e.target.value)} />
      <PrimaryTextarea
        className="mb-10"
        label="Hotel Description"
        width="500"
        value={newHotel.description}
        onChange={e => onChange('description', e.target.value)} />
      <PrimaryInput
        className="mb-10"
        label="Latitute"
        width="500"
        type="number"
        value={newHotel.latitude}
        onChange={e => onChange('latitude', e.target.value)} />
      <PrimaryInput
        className="mb-10"
        label="Longitute"
        width="500"
        type="number"
        value={newHotel.longitude}
        onChange={e => onChange('longitude', e.target.value)} />
      <PrimaryButton onClick={createHotelFnc}>Create</PrimaryButton>
    </Section>
  )
}

export default CreateHotel