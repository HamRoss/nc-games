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
        <p>
          {author} - {formattedDate}
        </p>
      </div>
      <div className="divb">Votes: {votes} </div>
      <div className="divc">
        <button className="commentButton">Upvote</button>
      </div>
      <div className="divd">
        <button className="commentButton"> Downvote</button>
      </div>
      <div className="dive">
        <p>{body}</p>
      </div>
    </section>
  );
}

export default SingleComment;
