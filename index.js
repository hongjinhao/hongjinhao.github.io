const likeBtn = document.getElementById("likeButton");
const likeCount = document.getElementById("likeCount");
const PRODUCTION_URL = "https://hongjinhao-github-io-backend.onrender.com";
const DEV_URL = "http://localhost:8080";
const BASE_URL =
  window.location.hostname === "127.0.0.1"
    ? DEV_URL
    : // if this script is running on github pages
      "https://hongjinhao-github-io-backend.onrender.com";
/*
    Interactive Like Button: Heart Shape Symbol
    When pressed, alternate between the two states: on and off. 
    Simultaneously, likeCount += 1
    likeBtn has an onclick HTML event that takes in a function
    Our defined function expression changes HTML, set attributes and change classLists
*/
likeBtn.onclick = function () {
  if (likeBtn.getAttribute("data-liked") == "true") {
    likeBtn.innerHTML = "&#9825;"; // Outlined heart
    likeBtn.setAttribute("data-liked", "false");
    likeBtn.classList.remove("liked");
    decLikeCount();
  } else {
    likeButton.innerHTML = "&#9829;"; // Filled heart
    likeBtn.setAttribute("data-liked", "true");
    likeBtn.classList.add("liked");
    incLikeCount();
  }
};
// asynchronous function to increase likes in Backend
async function incLikeCount() {
  try {
    const response = await fetch(BASE_URL + "/api/likeCount/increase", {
      method: "PUT",
    });
    const data = await response.json();
    console.log(data.msg);
    likeCount.textContent = data.db.likeCount;
  } catch (error) {
    console.error("Error increasing likeCount", error);
  }
}
// asynchronous function to decrease likes in Backend
async function decLikeCount() {
  try {
    const response = await fetch(BASE_URL + "/api/likeCount/decrease", {
      method: "PUT",
    });
    const data = await response.json();
    console.log(data.msg);
    likeCount.textContent = data.db.likeCount;
  } catch (error) {
    console.error("Error decreasing likeCount", error);
  }
}
// Asynchronous function to retrieve number of likes from Backend
async function getLikeCount() {
  try {
    const response = await fetch(BASE_URL + "/api/likeCount"); // Wait for the fetch to complete
    const data = await response.json(); // Wait for the JSON to be parsed
    console.log(data.likeCount); // Access and log the likeCount property
    likeCount.innerHTML = data.likeCount;
    NumOfLikes = data.likeCount;
  } catch (error) {
    console.error("Error fetching likeCount:", error); // Handle errors
  }
}

getLikeCount();
