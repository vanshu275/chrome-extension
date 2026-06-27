import { useEffect, useState } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [videoId, setVideoId] = useState("");

useEffect(() => {
  chrome.storage.local.get(
    ["title", "videoId"],
    (result) => {
      setTitle(result.title);
      setVideoId(result.videoId);
    }
  );
}, []);

  return(
    <div>
      <h2>{videoId}</h2>
     <h2>{title}</h2>;
  </div>
  )
}

export default App;