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
      <p>{body}</p>
      <h3>{author}</h3>
      <p>
        Votes: {votes} Submitted: {formattedDate}
      </p>
    </section>
  );
}

export default SingleComment;
