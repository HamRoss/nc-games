function Error({ error }) {
  const { status, msg } = error;

  console.log("error", error);
  console.log("status", status);
  console.log("msg", msg);

  return (
    <div className="error-panel">
      <h2 className="error-code">{status}</h2>
      <p>{msg}</p>
    </div>
  );
}

export default Error;
