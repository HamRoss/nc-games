function SingleComment({ comment }) {
  const { body, author, votes, created_at } = comment;

  const dateString = created_at;
  const date = new Date(dateString);

  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };

  const formattedDate = date.toLocaleDateString("en-US", options);

  return (
    <section className="single-comment">
      <div className="diva">
        <h3>{author}</h3>
      </div>
      <div className="divb"> {formattedDate}</div>
      <div className="divc">
        Votes: {votes}
        {/* can insert button here in future */}
      </div>
      <div className="divd">{/* can insert button here in future */}</div>
      <div className="dive">
        <p>{body}</p>
      </div>
    </section>
  );
}

export default SingleComment;
