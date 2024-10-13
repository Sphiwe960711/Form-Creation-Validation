async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users'; // API URL
    const dataContainer = document.getElementById('api-data'); // Data container element

    try {
        // Fetch data from API
        const response = await fetch(apiUrl);
        const users = await response.json(); // Convert response to JSON

        // Clear loading message
        dataContainer.innerHTML = '';

        // Create a <ul> element for user names
        const userList = document.createElement('ul');

        // Loop through users and create <li> for each
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name; // Set text content to user’s name
            userList.appendChild(listItem); // Append <li> to <ul>
        });

        // Append the user list to data container
        dataContainer.appendChild(userList);

    } catch (error) {
        // Handle any errors
        dataContainer.innerHTML = ''; // Clear existing content
        dataContainer.textContent = 'Failed to load user data.'; // Set error message
        console.error('Error fetching user data:', error); // Log error to console
    }
}

// Invoke fetchUserData on DOMContentLoaded
document.addEventListener('DOMContentLoaded', fetchUserData);
