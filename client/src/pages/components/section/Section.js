import './style.scss'

const Section = ({ children }) => {
  return (
    <section className="page-section">
      <div className="container">
        { children }
      </div>
    </section>
  )
}

export default Section