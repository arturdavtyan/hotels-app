import './PrimaryButton.scss'

const PrimaryButton = ({ onClick, children, className }) => {
  return (
    <button className={`primary-button ${className || ''}`.trim()} onClick={onClick}>
      { children }
    </button>
  )
}

export default PrimaryButton