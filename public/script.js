// Fetch data from the server and display it
fetch('/data')
  .then((response) => response.json())
  .then((data) => {
    const dataContainer = document.querySelector('.data-container');
    data.forEach((item) => {
      const itemElement = document.createElement('div');
      // Customize how you want to display each item
      itemElement.innerHTML = `
        <h2>${item.title}</h2>
        <p>${item.description}</p>
        <!-- Include other properties as needed -->
      `;
      dataContainer.appendChild(itemElement);
    });
  })
  .catch((error) => {
    console.error('Error fetching data:', error);
  });

// Show/hide the add item form
const addButton = document.getElementById('addButton');
const addItemForm = document.getElementById('addItemForm');

addButton.addEventListener('click', () => {
  addItemForm.style.display = 'block';
});

// Handle form submission
addItemForm.addEventListener('submit', (event) => {
  event.preventDefault();

  // Get user input from the form fields
  const title = document.getElementById('title').value;
  const description = document.getElementById('description').value;
  // Include other fields and data validation as needed

  // Validate user input (You can use Joi or custom validation functions here)

  // If validation passes, send data to the server
  // Replace this with actual data validation and server communication
  if (title && description) {
    fetch('/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title,
        description,
        // Include other data properties as needed
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        // Display success message and refresh the data
        console.log('Item added successfully:', result);
        // You can implement success message display and data refresh here
        addItemForm.reset(); // Clear the form
        addItemForm.style.display = 'none'; // Hide the form
      })
      .catch((error) => {
        console.error('Error adding item:', error);
        // Display an error message to the user
      });
  }
});