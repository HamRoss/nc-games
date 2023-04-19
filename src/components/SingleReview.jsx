import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchReviewById, fetchCommentsById } from "../utils/api";
import LargeReviewCard from "./LargeReviewCard";
import { CircularProgress } from "@mui/material";
import CommentContainer from "./CommentContainer";

function SingleReview({ user }) {
  const { review_id } = useParams();
  const [review, setReview] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [comments, setComments] = useState([]);
  const [commentsLoading, setCommentsLoading] = useState(true);
  const [additionalCommentCount, setAdditionalCommentCount] = useState(0);

  useEffect(() => {
    fetchReviewById(review_id).then((review) => {
      setReview(review);
      setIsLoading(false);
    });
  }, [review_id, isLoading]);

  useEffect(() => {
    fetchCommentsById(review_id).then((comments) => {
      setComments(comments);
      setCommentsLoading(false);
    });
  }, [review_id]);

  return (
    <section className="single-review-container">
      {isLoading ? (
        <div className="loading-container">
          <CircularProgress color="inherit" />
        </div>
      ) : (
        <div>
          <LargeReviewCard
            review={review}
            setReview={setReview}
            additionalCommentCount={additionalCommentCount}
          />
          <CommentContainer
            commentsLoading={commentsLoading}
            comments={comments}
            user={user}
            setComments={setComments}
            setAdditionalCommentCount={setAdditionalCommentCount}
          />
        </div>
      )}
    </section>
  );
}

export default SingleReview;
