import './style.scss'

const Rate = ({ rate = 0, size = 34, onChange = () => {} }) => {
  const rateProcent = rate / 0.05
  const stars = Array(5).fill(null).map((e, i) => i+1)

  return (
    <div className="rating" style={{ fontSize: `${size}px` }}>
      <div className="rating__body">
        <div className="rating__active" style={{ width: `${rateProcent}%` }}></div>
        <div className="rating__items">
          { stars.map(star => {
            return (
              <input
                key={star}
                type="radio"
                className="rating__item"
                value={star}
                name="rating"
                onChange={e => onChange(parseInt(e.target.value, 10))} />
            )
          }) }
        </div>
      </div>
    </div>
  )
}

export default Rate