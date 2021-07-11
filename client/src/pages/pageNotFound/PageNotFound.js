import { Link } from 'react-router-dom'

import Section from "../components/section/Section"
import PageTitle from "../components/pageTitle/PageTitle"

import './style.scss'

const CreateHotel = () => {
  return (
    <Section>
      <PageTitle title="Page Not Found" />
      <Link className="link" to="/">Go to hotels page</Link>
    </Section>
  )
}

export default CreateHotel