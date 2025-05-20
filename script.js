let percentage = parseInt(localStorage.getItem("progress")) || 0;

const progressBar = document.getElementById("progress-bar");
const incrementBtn = document.getElementById("increment-btn");

function updateProgress() {
  progressBar.style.width = percentage + "%";
}

function saveProgress() {
  localStorage.setItem("progress", percentage);
}

incrementBtn.addEventListener("click", () => {
  if (percentage < 100) {
    percentage = Math.min(percentage + 10, 100);
    updateProgress();
    saveProgress();
  }
});

updateProgress();
