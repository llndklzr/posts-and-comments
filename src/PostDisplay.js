import { useState } from "react";

export default function PostDisplay({ id, post, comments }) {
  const [showComments, setshowComments] = useState(false);

  const onClick = () => {
    setshowComments(!showComments);
  };

  return (
    <div key={id} className="post-container" >
      <div className="post-title-and-body" onClick={onClick}>
        <h2 className="post-title">{`${post.title}`}</h2>
        <p className="post-body">{post.body}</p>
      </div>
      {showComments && (
        <ul className="post-comments">
          {comments.map((comment) => {
            return (
              <li key={comment.id} className="comment">
                <h4>{comment.name}</h4>
                <p>{comment.body}</p>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
