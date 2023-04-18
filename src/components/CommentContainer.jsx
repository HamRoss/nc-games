import SingleComment from "./SingleComment";
import { CircularProgress } from "@mui/material";

function CommentContainer({ commentsLoading, comments }) {
  return (
    <section className="comment-container">
      <h2>Comments</h2>

      {commentsLoading ? (
        <div className="loading-container">
          <CircularProgress color="inherit" />
        </div>
      ) : (
        comments.map((comment) => {
          return <SingleComment key={comment.comment_id} comment={comment} />;
        })
      )}
      {comments.length ? null : <h4>Be the first to leave a comment</h4>}
    </section>
  );
}

export default CommentContainer;
