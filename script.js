// Toggles the display of menu sections
document.addEventListener('DOMContentLoaded', () => {
    const headers = document.querySelectorAll('.menu-section-header');
  
    headers.forEach(header => {
      header.addEventListener('click', () => {
        const section = header.nextElementSibling;
        section.style.display = section.style.display === 'none' ? 'block' : 'none';
      });
    });
  });
  
  // Function to search menu items
  function searchMenu() {
    let input = document.getElementById('menuSearch').value;
    input = input.toLowerCase();
    const menuItems = document.getElementsByClassName('menu-item');
  
    for (let i = 0; i < menuItems.length; i++) {
      if (!menuItems[i].innerText.toLowerCase().includes(input)) {
        menuItems[i].style.display = "none";
      } else {
        menuItems[i].style.display = "block";
      }
    }
  }
  
  // Function to toggle the theme
  function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-theme');
  }
  