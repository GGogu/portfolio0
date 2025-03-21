document.addEventListener("DOMContentLoaded", function() {
    const startBtn = document.getElementById("start-btn");

    if (startBtn) {
        startBtn.addEventListener("click", function() {
            window.location.href = "index.html";
        });
    }
});
