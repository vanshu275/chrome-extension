import { useEffect, useState } from "react";

function App() {
  const [url, setUrl] = useState("");

  useEffect(() => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      setUrl(tabs[0].url);
    });
  }, []);

  return (
    <div>
      <h2>YouTube Notes</h2>
      <p>{url}</p>
    </div>
  );
}

export default App;