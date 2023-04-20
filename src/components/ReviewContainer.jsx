import SmallReviewCard from "./SmallReviewCard";
import CircularProgress from "@mui/material/CircularProgress";
import { Link } from "react-router-dom";

function ReviewContainer({ reviews, setReviews, isLoading }) {
  return (
    <section className="review-container">
      <div className="loading-container">
        {isLoading ? <CircularProgress color="inherit" /> : null}
      </div>

      {reviews.map((review) => {
        return (
          <Link key={review.review_id} to={`/reviews/${review.review_id}`}>
            <SmallReviewCard review={review} key={review.review_id} />
          </Link>
        );
      })}
    </section>
  );
}

export default ReviewContainer;
