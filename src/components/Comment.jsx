function Comment({ name, email, body }) {
  return (
    <div>
      <h1>{name}</h1>
      <h1>{email}</h1>
      <p>{body}</p>
    </div>
  );
}

export default Comment;
