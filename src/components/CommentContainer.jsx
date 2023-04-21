import SingleComment from "./SingleComment";
import { CircularProgress } from "@mui/material";
import AddComment from "./AddComment";

function CommentContainer({
  commentsLoading,
  comments,
  user,
  setComments,
  setAdditionalCommentCount,
  error,
  setError,
}) {
  return (
    <section className="comment-container">
      <h2>Comments</h2>

      {commentsLoading ? (
        <div className="loading-container">
          <CircularProgress color="inherit" />
        </div>
      ) : (
        <div>
          <AddComment
            user={user}
            setComments={setComments}
            setAdditionalCommentCount={setAdditionalCommentCount}
            error={error}
            setError={setError}
          />
          {comments.map((comment) => {
            return (
              <SingleComment
                key={comment.comment_id}
                comment={comment}
                user={user}
                setComments={setComments}
              />
            );
          })}
        </div>
      )}
      {comments.length ? null : <h4>Be the first to leave a comment</h4>}
    </section>
  );
}

export default CommentContainer;
