import CommentIcon from "@mui/icons-material/Comment";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

function SmallReviewCard({ review }) {
  return (
    <div className="small-review-card" key={review.review_id}>
      <img
        className="small-review-image"
        src={review.review_img_url}
        alt={`${review.owner}'s review of a ${review.category} game`}
      ></img>
      <h3 className="review-title">{review.title}</h3>
      <p className="author-name">{review.owner}</p>
      <p className="votes-and-comments">
        <ThumbUpIcon fontSize="x-small" /> {` ${review.votes}`}
        {`   `}
        <CommentIcon fontSize="x-small" />
        {` ${review.comment_count}`}
      </p>
    </div>
  );
}

export default SmallReviewCard;
