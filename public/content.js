const videoId = new URL(window.location.href).searchParams.get("v");

chrome.storage.local.set({
  title: document.title,
  videoId,
});

console.log("saved");
console.log(document.body.innerText.slice(0, 1000));