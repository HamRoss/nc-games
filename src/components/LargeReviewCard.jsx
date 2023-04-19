import CommentIcon from "@mui/icons-material/Comment";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import { patchReviewById } from "../utils/api";
import { useState } from "react";

function LargeReviewCard({ review, setReview, additionalCommentCount }) {
  const [error, setError] = useState("");
  const [extraVotes, setExtraVotes] = useState(0);
  const [upvoteClicked, setUpvoteClicked] = useState(false);
  const [downvoteClicked, setDownvoteClicked] = useState(false);

  const handleUpVote = () => {
    setUpvoteClicked(true);
    setExtraVotes(1);
    if (downvoteClicked) {
      patchReviewById(review_id, 2)
        .then(() => {})
        .catch(() => {
          setError("Something went wrong, please try again later");
          setExtraVotes(-1);
        });
    } else {
      patchReviewById(review_id, 1)
        .then(() => {})
        .catch(() => {
          setError("Something went wrong, please try again later");
          setExtraVotes(-1);
        });
    }
  };

  const handleDownVote = () => {
    setExtraVotes(-1);
    setDownvoteClicked(true);

    if (upvoteClicked) {
      patchReviewById(review_id, -2)
        .then(() => {})
        .catch(() => {
          setError("Something went wrong, please try again later");
          setExtraVotes(1);
        });
    } else {
      patchReviewById(review_id, -1)
        .then(() => {})
        .catch(() => {
          setError("Something went wrong, please try again later");
          setExtraVotes(1);
        });
    }
  };

  const {
    title,
    category,
    designer,
    owner,
    review_body,
    review_img_url,
    created_at,
    votes,
    comment_count,
    review_id,
  } = review;

  const dateString = created_at;
  const date = new Date(dateString);

  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  const formattedDate = date.toLocaleDateString("en-US", options);

  return (
    <div className="large-review-card">
      <div className="div1">
        <h3 className="review-title">{title}</h3>
        <p className="author-name">{owner}</p>
      </div>
      <div className="div2">
        <img
          src={review_img_url}
          alt={`${owner}'s review of ${category} game`}
        />
      </div>

      <div className="div8">
        <button disabled={upvoteClicked} onClick={handleUpVote}>
          <p className="large-votes-comments">
            <ThumbUpIcon className="icon" fontSize="large" />
          </p>
        </button>
      </div>
      <div className="div10">
        <button className="comment-button">
          <p className="comment-button">
            <CommentIcon className="icon" fontSize="large" />
            {` ${comment_count + additionalCommentCount}`}
          </p>
        </button>
      </div>

      <div className="div3">
        <p>{review_body}</p>
      </div>
      <div className="div5">
        <h4>Game designer: </h4>
        <p>{designer}</p>
      </div>
      <div className="div6">
        <h4>Submitted:</h4>
        <p>{formattedDate}</p>
      </div>
      <div className="div7">
        <div className="votes">
          <p>Likes: {votes + extraVotes}</p>
        </div>
      </div>
      <div className="div9">
        <button disabled={downvoteClicked} onClick={handleDownVote}>
          <p className="large-votes-comments">
            <ThumbDownIcon className="icon" fontSize="large" />
          </p>
        </button>
      </div>
      <div>{error ? <div>{error}</div> : null}</div>
    </div>
  );
}

export default LargeReviewCard;
