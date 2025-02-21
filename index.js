let currentIndex = 0;

function moveSlide(direction) {
    const images = document.querySelector(".carousel-images");
    const totalImages = images.children.length;

    currentIndex += direction;
    
    if (currentIndex >= totalImages) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = totalImages - 1;
    }

    const offset = -currentIndex * 100;
    images.style.transform = `translateX(${offset}%)`;
}

function setupAccordion() {
    document.querySelectorAll(".accordion-header").forEach(button => {
        button.addEventListener("click", () => {
            const accordionItem = button.parentElement;


            accordionItem.classList.toggle("active");
        });
    });
}

document.addEventListener("DOMContentLoaded", setupAccordion);


function setupDropdown() {
    const profile = document.getElementById("profile");
    const dropdownArrow = document.getElementById("dropdown-arrow");
    const dropdownMenu = document.getElementById("dropdown-menu");
    let isDropdownSticky = false;

    function showDropdown() {
        dropdownMenu.classList.add("active");
    }

    function hideDropdown() {
        if (!isDropdownSticky) {
            dropdownMenu.classList.remove("active");
        }
    }

    profile.addEventListener("mouseenter", showDropdown);
    dropdownMenu.addEventListener("mouseenter", showDropdown);

    profile.addEventListener("mouseleave", hideDropdown);
    dropdownMenu.addEventListener("mouseleave", hideDropdown);

    dropdownArrow.addEventListener("click", (event) => {
        event.stopPropagation();
        isDropdownSticky = !isDropdownSticky;
        if (isDropdownSticky) {
            showDropdown();
        } else {
            hideDropdown();
        }
    });

    document.addEventListener("click", (event) => {
        if (!profile.contains(event.target) && !dropdownMenu.contains(event.target)) {
            isDropdownSticky = false;
            hideDropdown();
        }
    });

    window.addEventListener("scroll", () => {
        isDropdownSticky = false;
        hideDropdown();
    });
}

document.addEventListener("DOMContentLoaded", () => {
    setupAccordion();
    setupDropdown();
});
