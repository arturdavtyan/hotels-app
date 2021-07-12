import './PrimaryInput.scss'

const PrimaryInput = ({ onChange, label, className, width, type = 'text' }) => {
  return (
    <div
      style={{ maxWidth: width ? `${width}px` : '100%' }}
      className={`primary-input ${className || ''}`.trim()}>
      <div className="primary-input__title">
        <span className="primary-input__text">{ label }</span>
      </div>
      <div className="primary-input__input-box">
        <input className="primary-input__input" type={type} onChange={onChange} />
      </div>
    </div>
  )
}

export default PrimaryInput