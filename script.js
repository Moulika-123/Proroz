const getStartedBtn = document.getElementById('get-started-btn');

// Add an event listener to the button
getStartedBtn.addEventListener('click', () => {
  // Alert a message when the button is clicked
  alert('Get started with our delicious recipes!');
});

// Add a function to toggle the navigation menu on smaller screens
function toggleMenu() {
  const nav = document.querySelector('nav');
  nav.classList.toggle('active');
}

// Get the navigation menu toggle button
const menuToggleBtn = document.querySelector('.menu-toggle-btn');

// Add an event listener to the menu toggle button
menuToggleBtn.addEventListener('click', toggleMenu);