import { useState } from "react";
import { deleteCommentById } from "../utils/api";

function SingleComment({ comment, user, setComments }) {
  const { body, author, votes, created_at, comment_id } = comment;

  const [deleteLoading, setDeleteLoading] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);
  const [deleteCommentError, setDeleteCommentError] = useState(null);

  const { username } = user;

  const dateString = created_at;
  const date = new Date(dateString);
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };
  const formattedDate = date.toLocaleDateString("en-US", options);

  const handleDelete = () => {
    setButtonClicked(true);
    setDeleteLoading(true);
    deleteCommentById(comment_id)
      .then((response) => {
        setComments((currentComments) => {
          setDeleteLoading(false);
          const commentsCopy = JSON.parse(JSON.stringify(currentComments));
          const filteredComments = commentsCopy.filter(
            (comment) => comment.comment_id !== comment_id
          );

          return filteredComments;
        });
      })
      .catch((err) => {
        setDeleteLoading(false);
        setDeleteCommentError(
          "Couldn't delete comment, please try again later"
        );
      });
  };

  return (
    <section className="single-comment">
      <div className="diva">
        <h3>{author}</h3>
      </div>
      <div className="divb"> {formattedDate}</div>
      <div className="divc">
        {username === author ? (
          <button
            disabled={buttonClicked}
            className="delete-button"
            onClick={handleDelete}
          >
            Delete
          </button>
        ) : null}
      </div>
      <div className="divd">
        {deleteLoading ? (
          <p>Deleting...</p>
        ) : (
          <p className="comment-votes">Votes: {votes}</p>
        )}
      </div>
      <div className="dive">
        <p>{body}</p>
      </div>
      <div> {deleteCommentError ? <p>{deleteCommentError}</p> : null} </div>
    </section>
  );
}

export default SingleComment;
