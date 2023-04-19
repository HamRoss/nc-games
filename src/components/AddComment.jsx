import { useState } from "react";
import { postCommentById } from "../utils/api";
import { useParams } from "react-router-dom";

function AddComment({ user, setComments, setAdditionalCommentCount }) {
  const { username, avatar_url } = user;
  const { review_id } = useParams();
  const [commentSubmitted, setCommentSubmitted] = useState(false);
  const [commentPosted, setCommentPosted] = useState(false);

  const [commentBody, setCommentBody] = useState("");

  function handleChange(event) {
    event.preventDefault();
    setCommentBody(event.target.value);
  }

  function handleSubmit(event) {
    setCommentSubmitted(true);
    event.preventDefault();
    postCommentById(review_id, commentBody, username).then((comment) => {
      setAdditionalCommentCount(1);
      setCommentPosted(true);
      setComments((currentComments) => {
        return [comment, ...currentComments];
      });
    });
  }

  return (
    <div className="add-comment">
      <h3>Add comment</h3>
      <img className="avatar" src={avatar_url} alt={`${username}'s avatar`} />
      <p>Signed in as: {username}</p>

      {commentPosted ? (
        <h3>Thanks for your comment</h3>
      ) : (
        <form onSubmit={handleSubmit}>
          <label htmlFor="comment">Add comment:</label>
          <textarea
            id="comment"
            type="text-area"
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit" disabled={commentSubmitted}>
            Submit
          </button>
        </form>
      )}
    </div>
  );
}

export default AddComment;
