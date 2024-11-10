let NumOfLikes = 0;
const likeBtn = document.getElementById("likeButton");
const likeCount = document.getElementById("likeCount");

likeBtn.onclick = function() {
    if (likeBtn.classList.getAttribute("data-liked")) {
        likeBtn.innerHTML = "&#9825;"; // Outlined heart
        likeBtn.setAttribute("data-liked", "false");
        NumOfLikes--;
        likeCount.textContent = NumOfLikes;
    } else {
        likeButton.innerHTML = "&#9829;"; // Filled heart
        likeBtn.setAttribute("data-liked", "true");
        NumOfLikes++;
        likeCount.textContent = NumOfLikes;
    }

}