import { useState } from "react";
import { PostComponent } from "./Post";
import { NotificationBell } from "./NotificationBell";

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
      description: "Wanna get Lazy? Join for the upcoming event and get to learn from me personally!!"
    }])
  }

  return (
    <div style={{background: "grey", height: "100vh", width: "100vw" }}>
      <NotificationBell />
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

// import { useEffect, useState } from "react";

// function App(){
//   const [currentTab, setCurrentTab] = useState(1);
//   const [ tabData, setTabData ] = useState({});

//   useEffect(function(){
//     //send a backend request to get data for this tab
//     console.log("send request to backend to get data for tab " + currentTab)
//     fetch("https://jsonplaceholder.typicode.com/todos/" + currentTab)
//       .then(async res=>{
//         const json = await res.json();
//         setTabData(json);
//       });
//   },[currentTab])

//   return <div>
//     <button onClick={function(){
//       setCurrentTab(1)
//     }} style={{color: currentTab == 1? "red" : "black"}}>Todo #1</button>
//     <button onClick={function(){
//       setCurrentTab(2)
//     }} style={{color: currentTab == 2 ? "red" : "black"}}>Todo #2</button>
//         <button onClick={function(){
//       setCurrentTab(3)
//     }} style={{color: currentTab == 3 ? "red" : "black"}}>Todo #3</button>
//         <button onClick={function(){
//       setCurrentTab(4)
//     }} style={{color: currentTab == 4 ? "red" : "black"}}>Todo #4</button>
//     <br></br>
//     {tabData.title}
//   </div>
// }

// export default App