import CommentIcon from "@mui/icons-material/Comment";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

function LargeReviewCard({ review }) {
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
        <p className="large-votes-comments">
          <ThumbUpIcon className="icon" fontSize="large" /> {` ${votes}`}
        </p>
      </div>
      <div className="div7">
        <p className="large-votes-comments">
          <CommentIcon className="icon" fontSize="large" />
          {` ${comment_count}`}
        </p>
      </div>
      <div className="div5">
        <p>{review_body}</p>
      </div>
      <div className="div3">
        <p>Game designer: {designer}</p>
      </div>
      <div className="div4">
        <p>{Date(created_at).slice(3, 15)}</p>
      </div>
    </div>
  );
}

export default LargeReviewCard;
