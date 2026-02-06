// Fake data (demo)
const task = {
    id: 1,
    title: "Hoàn thành báo cáo Git",
    description: "Làm bài Git teamwork theo mô hình feature branch",
    status: "In Progress",
    createdAt: "06/02/2026"
};

// Render task
document.getElementById("task-title").innerText = task.title;
document.getElementById("task-desc").innerText = task.description;
document.getElementById("task-status").innerText = "Status: " + task.status;
document.getElementById("task-date").innerText = "Created: " + task.createdAt;

/* =========================
   Rating logic
========================= */
const stars = document.querySelectorAll(".stars span");
const ratingText = document.getElementById("rating-value");
let currentRating = 0;

stars.forEach(star => {
    star.addEventListener("click", () => {
        currentRating = star.dataset.value;
        updateStars(currentRating);
        ratingText.innerText = "Đã đánh giá: " + currentRating + " sao";
    });
});

function updateStars(value) {
    stars.forEach(star => {
        if (star.dataset.value <= value) {
            star.classList.add("active");
        } else {
            star.classList.remove("active");
        }
    });
}

/* =========================
   Comment logic
========================= */
const commentInput = document.getElementById("comment-input");
const commentBtn = document.getElementById("comment-btn");
const commentList = document.getElementById("comment-list");

let comments = [];

commentBtn.addEventListener("click", () => {
    const text = commentInput.value.trim();
    if (text === "") return;

    const comment = {
        id: Date.now(),
        content: text
    };

    comments.push(comment);
    renderComments();
    commentInput.value = "";
});

function renderComments() {
    commentList.innerHTML = "";
    comments.forEach(c => {
        const div = document.createElement("div");
        div.className = "comment";
        div.innerText = c.content;
        commentList.appendChild(div);
    });
}
