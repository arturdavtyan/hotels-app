import './SecondaryButton.scss'

const SecondaryButton = ({ onClick, children, className }) => {
  return (
    <button className={`secondary-button ${className || ''}`.trim()} onClick={onClick}>
      { children }
    </button>
  )
}

export default SecondaryButton