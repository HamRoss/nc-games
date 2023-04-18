import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchReview, fetchComments } from "../api";
import LargeReviewCard from "./LargeReviewCard";
import { CircularProgress } from "@mui/material";
import CommentContainer from "./CommentContainer";

function SingleReview() {
  const { review_id } = useParams();
  const [review, setReview] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetchReview(review_id).then((review) => {
      setReview(review);
      setIsLoading(false);
    });
  }, [review_id, isLoading]);

  useEffect(() => {
    fetchComments(review_id).then((comments) => {
      setComments(comments);
    });
  }, [review_id]);

  console.log(comments);

  return (
    <section className="single-review-container">
      {isLoading ? (
        <div className="loading-container">
          <CircularProgress color="inherit" />
        </div>
      ) : (
        <div>
          <LargeReviewCard review={review} />
          <CommentContainer comments={comments} />
        </div>
      )}
    </section>
  );
}

export default SingleReview;
