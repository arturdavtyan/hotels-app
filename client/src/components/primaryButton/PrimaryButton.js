import './style.scss'

const PrimaryButton = ({ onClick, children }) => {
  return (
    <button className="primary-button" onClick={onClick}>
      { children }
    </button>
  )
}

export default PrimaryButton