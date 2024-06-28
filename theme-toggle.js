// Get the theme toggle button
const themeToggleBtn = document.getElementById('theme-toggle-btn');

// Function to toggle between dark and light themes
function toggleTheme() {
  document.body.classList.toggle('light-theme');
}

// Event listener for the theme toggle button
themeToggleBtn.addEventListener('click', toggleTheme);
