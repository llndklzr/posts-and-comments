import { useEffect, useState } from "react";
import { listPosts, listComments } from "./utilities/api";
import PostDisplay from "./PostDisplay";

function App() {
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    async function loadPosts() {
      const initialPosts = await listPosts();
      setPosts(initialPosts);
    }
    async function loadComments() {
      const initialComments = await listComments();
      setComments(initialComments);
    }
    loadPosts();
    loadComments();
  }, []);

  return (
    <body className="App">
      <div className="content-wrapper">
        <div className="App-header">
          <h1 className="App-title">Posts</h1>
        </div>
        <ul>
          {posts.map((post) => {
            return (
              <PostDisplay
                key={post.id}
                post={post}
                comments={comments.filter(
                  (comment) => comment.postId === post.id
                )}
              />
            );
          })}
        </ul>
      </div>
    </body>
  );
}

export default App;
