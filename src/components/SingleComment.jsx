function SingleComment({ comment }) {
  const { body, author, votes, created_at } = comment;

  return (
    <section className="single-comment">
      <p>{body}</p>
      <h3>{author}</h3>
      <p>
        Votes: {votes} Submitted: {Date(created_at)}
      </p>
    </section>
  );
}

export default SingleComment;
