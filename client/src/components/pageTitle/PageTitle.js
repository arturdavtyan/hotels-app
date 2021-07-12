import './PageTitle.scss'

const PageTitle = ({ title, className }) => {
  return (
    <div className={`page-title ${className || ''}`.trim()}>
      <h2 className="page-title__text">{ title }</h2>
    </div>
  )
}

export default PageTitle