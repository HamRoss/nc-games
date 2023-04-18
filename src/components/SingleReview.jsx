import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchReview } from "../api";
import LargeReviewCard from "./LargeReviewCard";

function SingleReview() {
  const { review_id } = useParams();
  const [review, setReview] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchReview(review_id).then((review) => {
      setReview(review);
      setIsLoading(false);
    });
  }, [review_id, isLoading]);

  return (
    <section className="single-review-container">
      <LargeReviewCard review={review} />
    </section>
  );
}

export default SingleReview;
