import ReviewContainer from "./ReviewContainer";
import { useState, useEffect } from "react";
import { fetchReviews } from "../api";

function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchReviews().then((reviews) => {
      setReviews(reviews);
      setIsLoading(false);
    });
  }, [isLoading]);

  return (
    <section>
      <h2>Latest reviews</h2>
      <ReviewContainer
        className="review-container"
        reviews={reviews}
        setReviews={setReviews}
        isLoading={isLoading}
      />
    </section>
  );
}

export default Reviews;
