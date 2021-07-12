import Card from '../card/Card'
import Comment from './Comment'

const Comments = ({ comments = [] }) => {
  return (
    <>
      { comments.length > 0 &&
        <Card>
          { comments.map(comment => <Comment key={comment.feedback_id} comment={comment} />) }
        </Card> }
    </>
  )
}

export default Comments