import './style.scss'

const Comments = ({ comments = [] }) => {
  return (
    <div className="comments">
      { comments.map(comment => {
        return (
          <div className="comments__item">{ comment }</div>
        )
      }) }
    </div>
  )
}

export default Comments