import Rate from '../rate/Rate'

import './Comment.scss'

const Comment = ({ comment }) => {
  const { message, rate, created_at } = comment
  const date = new Date(created_at)

  const day = String(date.getDate()).padStart(2, 0)
  const month = String(date.getMonth() + 1).padStart(2, 0)
  const year = date.getFullYear()
  const time = date.toLocaleTimeString()

  const dateString = `${day}-${month}-${year} ${time}`

  return (
    <div className="comment">
      <div className="flex items-center flex-wrap">
        <div className="comment__col">
          <div className="comment__date">
            <span className="comment__date-string">{ dateString }</span>
          </div>
        </div>
        <div className="comment__col flex justify-end">
          <Rate rate={rate} size="14" />
        </div>
      </div>
      <div className="mt-6">
        <p className="comment__text">{ message }</p>
      </div>
    </div>
  )
}

export default Comment