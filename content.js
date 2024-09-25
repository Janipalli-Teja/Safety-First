document.addEventListener('DOMContentLoaded', function() {
  const searchToggle = document.querySelector('.safety-search-toggle');
  const centerIcon = document.querySelector('.center-icon');
  const searchBoxContainer = document.querySelector('.safety-search-box-container');
  const searchInput = document.querySelector('.safety-search-input'); // Reference to the search input

  // Toggle search bar on icon click
  searchToggle.addEventListener('click', function(e) {
      e.preventDefault(); // Prevent default anchor behavior
      centerIcon.classList.toggle('search-active');
      searchInput.focus(); // Focus the input when search is activated
  });

  // Close search bar when mouse leaves the search box area and input is empty
  searchBoxContainer.addEventListener('mouseleave', function() {
      if (searchInput.value.trim() === "" && centerIcon.classList.contains('search-active')) {
          centerIcon.classList.remove('search-active');
      }
  });
});
