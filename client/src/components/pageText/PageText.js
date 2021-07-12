import './PageText.scss'

const PageText = ({ text, className }) => {
  return (
    <div className={`page-text ${className || ''}`.trim()}>
      <h2 className="page-text__text">{ text }</h2>
    </div>
  )
}

export default PageText