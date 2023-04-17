import SmallReviewCard from "./SmallReviewCard";
import CircularProgress from "@mui/material/CircularProgress";

function ReviewContainer({ reviews, setReviews, isLoading }) {
  return (
    <section className="review-container">
      <div className="loading-container">
        {isLoading ? <CircularProgress color="inherit" /> : null}
      </div>

      {reviews.map((review) => {
        return <SmallReviewCard review={review} />;
      })}
    </section>
  );
}

export default ReviewContainer;
