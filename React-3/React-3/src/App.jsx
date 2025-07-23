import { useState } from "react";
import { PostComponent } from "./Post";

function App() {
  const [posts, setPosts] = useState([]);

  const postComponents = posts.map(post => <PostComponent
    name={post.name}
    subtitle={post.subtitle}
    time={post.title}
    image={post.image}
    description={post.description}
  />)

  function addPost() {
    setPosts([...posts, {
      name: "yogesh",
      subtitle: "10000 followers",
      time: "2m ago",
      image: "https://tse1.mm.bing.net/th/id/OIP.vfSkjgTIHxEIOd1RhzY1PAHaEo?pid=Api&P=0&h=180",
      description: "Wanna get Lazyyy? Join for the upcoming event and get to learn from me personally!!"
    }])
  }

  return (
    <div style={{background: "grey", height: "100vh", width: "100vw" }}>
      <button onClick={addPost}>Add post</button>
      <div style={{display: "flex", justifyContent: "center" }}>
        <div>
          {postComponents}
        </div>
      </div>
    </div>
  )
}

export default App

