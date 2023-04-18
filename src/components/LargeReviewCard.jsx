function LargeReviewCard({ review }) {
  const {
    title,
    category,
    designer,
    owner,
    review_body,
    review_img_url,
    created_at,
    votes,
    comment_count,
  } = review;

  return (
    <div className="large-review-card">
      <div className="div1">
        <h3>{title}</h3>
        <p>{owner}</p>
      </div>
      <div className="div2">
        <img
          src={review_img_url}
          alt={`${owner}'s review of ${category} game`}
        />
      </div>
      <div className="div3">
        <p>Votes: {votes}</p>
      </div>
      <div className="div4">
        <p>Comments: {comment_count}</p>
      </div>
      <div className="div5">
        <p>{review_body}</p>
      </div>
      <div className="div6">
        <p>Game designer:</p>
        <p>{designer}</p>
      </div>
      <div className="div7">
        <p>Date created:</p>
        <p>{created_at}</p>
      </div>
    </div>
  );
}

export default LargeReviewCard;
