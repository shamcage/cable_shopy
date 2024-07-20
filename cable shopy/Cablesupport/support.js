// Add event listener to search input
document.getElementById('search-input').addEventListener('input', search);

// Function to handle search
function search() {
  const searchTerm = document.getElementById('search-input').value.trim();
  const searchResults = document.getElementById('search-results');

  // Clear previous search results
  searchResults.innerHTML = '';

  // Simulate search results (replace with actual search functionality)
  if (searchTerm.length > 2) {
    const results = [
      'Result 1',
      'Result 2',
      'Result 3',
    ];

    results.forEach((result) => {
      const resultElement = document.createElement('div');
      resultElement.textContent = result;
      searchResults.appendChild(resultElement);
    });
  }
}

// Add event listener to contact form
document.getElementById('contact-form').addEventListener('submit', submitContactForm);

// Function to handle contact form submission
function submitContactForm(event) {
  event.preventDefault();
  const formData = new FormData(event.target);

  // Simulate form submission (replace with actual form submission functionality)
  console.log('Form submitted:', formData);
  alert('Thank you for contacting us!');
}

// Add event listener to accordion buttons
const accordions = document.querySelectorAll('.accordion');

accordions.forEach((accordion) => {
  accordion.addEventListener('click', () => {
    accordion.classList.toggle('active');
  });
});