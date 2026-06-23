import { useEffect, useState } from "react";

function App() {
  const [title, setTitle] = useState("");

  useEffect(() => {
  chrome.storage.local.get(["title"], (result) => {
  console.log(result);
  setTitle(result.title);
});
}, []);

  return <h2>{title}</h2>;
}

export default App;