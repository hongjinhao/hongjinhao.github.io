let NumOfLikes = 0;
const likeBtn = document.getElementById("likeButton");
const likeCount = document.getElementById("likeCount");

likeBtn.onclick = function() {
    if (likeBtn.classList.contains("liked")) {
        likeBtn.classList.remove("liked");
        NumOfLikes--;
        likeCount.textContent = NumOfLikes;
    } else {
        likeBtn.classList.add("liked");
        NumOfLikes++;
        likeCount.textContent = NumOfLikes;
    }

}