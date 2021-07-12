import './Card.scss'

const Card = ({ children, className, title }) => {
  return (
    <div className={`card ${className || ''}`.trim()}>
      { title &&
        <div className="card__title">
        <span className="card__text">{ title }</span>
      </div> }
      { children }
    </div>
  )
}

export default Card