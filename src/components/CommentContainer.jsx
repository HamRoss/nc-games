import SingleComment from "./SingleComment";

function CommentContainer({ comments }) {
  return (
    <section className="comment-container">
      <h2>Comments</h2>
      {comments.map((comment) => {
        return <SingleComment key={comment.comment_id} comment={comment} />;
      })}
    </section>
  );
}

export default CommentContainer;
