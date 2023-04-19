import CommentIcon from "@mui/icons-material/Comment";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import { patchReviewById } from "../utils/api";
import { useState } from "react";

function LargeReviewCard({ review, setReview }) {
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
      <div className="div6">
        <button disabled={upvoteClicked} onClick={handleUpVote}>
          <p className="large-votes-comments">
            <ThumbUpIcon className="icon" fontSize="large" />
          </p>
        </button>
      </div>
      <div className="div7">
        <p className="large-votes-comments">
          <CommentIcon className="icon" fontSize="large" />
          {` ${comment_count}`}
        </p>
      </div>
      <div className="div5">
        <p>{review_body}</p>
        <p>Votes: {votes + extraVotes}</p>
      </div>
      <div className="div3">
        <p>Game designer: {designer}</p>
      </div>
      <div className="div4">
        <p>{Date(created_at).slice(3, 15)}</p>
      </div>
      <div>
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
