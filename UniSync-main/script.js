let currentIndex = 0;
const clubs = document.querySelector(".club-container");
const totalCards = document.querySelectorAll(".club-card").length;
const maxCardsPerPage = window.innerWidth >= 768 ? 4 : 1; 

function updateView() {
    const offset = currentIndex * clubs.children[0].clientWidth;
    clubs.scrollTo({ left: offset, behavior: "smooth" });
}

function nextSlide() {
    if (currentIndex < Math.ceil(totalCards / maxCardsPerPage) - 1) {
        currentIndex++;
        updateView();
    }
}

function prevSlide() {
    if (currentIndex > 0) {
        currentIndex--;
        updateView();
    }
}
