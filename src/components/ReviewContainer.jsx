import SmallReviewCard from "./SmallReviewCard";

function ReviewContainer({ reviews, setReviews }) {
  return (
    <section className="review-container">
      {reviews.map((review) => {
        return <SmallReviewCard review={review} />;
      })}
    </section>
  );
}

export default ReviewContainer;
