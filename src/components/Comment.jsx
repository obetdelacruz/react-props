/*
function Button({ label, onClick }) {
    return <button onClick={onClick}>{label}</button>;
  }
  
  export default Button;
*/

function Comment({ name, email, body }) {
  return (
    <div>
      <p>{name}</p>
      <p>{email}</p>
      <p>{body}</p>
    </div>
  );
}

export default Comment;
