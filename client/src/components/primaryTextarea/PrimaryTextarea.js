import './style.scss'

const PrimaryTextarea = ({ onChange, label, className, width }) => {
  return (
    <div
      style={{ maxWidth: width ? `${width}px` : '100%' }}
      className={`primary-textarea ${className || ''}`.trim()}>
      <div className="primary-textarea__title">
        <span className="primary-textarea__text">{ label }</span>
      </div>
      <div className="primary-textarea__textarea-box">
        <textarea className="primary-textarea__textarea" type="text" onChange={onChange}></textarea>
      </div>
    </div>
  )
}

export default PrimaryTextarea