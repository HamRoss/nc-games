function SmallReviewCard({ review }) {
  console.log(review);
  return (
    <div className="small-review-card" key={review.review_id}>
      <img
        className="small-review-image"
        src={review.review_img_url}
        alt={`${review.owner}'s review of a ${review.category} game`}
      ></img>
      <h3>{review.title}</h3>
      <p className="author-name">Author: {review.owner}</p>
      <p className="votes-and-comments">
        Votes: {review.votes} Comments: {review.comment_count}{" "}
      </p>
    </div>
  );
}

export default SmallReviewCard;
