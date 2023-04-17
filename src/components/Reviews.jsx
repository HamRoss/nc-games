import ReviewContainer from "./ReviewContainer";
import { useState, useEffect } from "react";
import { fetchReviews } from "../api";

function Reviews() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchReviews().then((reviews) => {
      setReviews(reviews);
    });
  }, []);

  return (
    <section>
      <h2>Latest reviews</h2>
      <ReviewContainer
        className="review-container"
        reviews={reviews}
        setReviews={setReviews}
      />
    </section>
  );
}

export default Reviews;
