// accordion
function toggleAccordion(selector) {
    const clickedItem = document.querySelector(selector);
    const allItems = document.querySelectorAll('.accordion-item');

    allItems.forEach(item => {
        if (item !== clickedItem) {
            item.classList.remove('active');
        }
    });

    clickedItem.classList.toggle('active');
}

// nav bar
window.onscroll = function () {
    var nav = document.querySelector("nav");
    if (window.scrollY > 1) { // Adjust scroll trigger
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }
};


function menuIcon() {
    document.querySelector('.menu-list').classList.toggle('show');
    document.querySelector('nav').classList.toggle('activeNavBar');

};
