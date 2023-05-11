//Pegination

const pagination = document.querySelector('.pagination');
const pages = pagination.querySelectorAll('.num');
const next = pagination.querySelector('.next');
let currentPage = 1;

// Add click event listener to each page button
pages.forEach(page => {
  page.addEventListener('click', e => {
    e.preventDefault();
    const pageNum = parseInt(page.textContent);
    setActivePage(pageNum);
  });
});

// Add click event listener to "Next" button
next.addEventListener('click', e => {
  e.preventDefault();
  setActivePage(currentPage + 1);
});

// Set active page and update pagination
function setActivePage(pageNum) {
  // Check if page number is valid
  if (pageNum >= 1 && pageNum <= pages.length) {
    // Remove active class from all pages
    pages.forEach(page => page.classList.remove('active'));
    // Add active class to selected page
    pages[pageNum - 1].classList.add('active');
    // Update current page
    currentPage = pageNum;
  }
  // Disable "Next" button if on last page
  if (currentPage === pages.length) {
    next.classList.add('disabled');
  } else {
    next.classList.remove('disabled');
  }
}
