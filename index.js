let NumOfLikes = 0;
const likeBtn = document.getElementById("likeButton");
const likeCount = document.getElementById("likeCount");

likeBtn.onclick = function() {
    if (likeBtn.getAttribute("data-liked") == "true") {
        likeBtn.innerHTML = "&#9825;"; // Outlined heart
        likeBtn.setAttribute("data-liked", "false");
        likeBtn.classList.remove("liked")
        NumOfLikes--;
        likeCount.textContent = NumOfLikes;
    } else {
        likeButton.innerHTML = "&#9829;"; // Filled heart
        likeBtn.setAttribute("data-liked", "true");
        likeBtn.classList.add("liked")
        NumOfLikes++;
        likeCount.textContent = NumOfLikes;
    }

}