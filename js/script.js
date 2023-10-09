// const nightModeToggle = document.getElementById('night-mode-toggle');
// const body = document.body;

// nightModeToggle.addEventListener('click', () => {
//     body.classList.toggle('night-mode');
// });

// // Function to toggle night mode
// function toggleNightMode() {
//     const body = document.body;
//     body.classList.toggle('night-mode');

//     // Save the night mode preference in localStorage
//     const nightModeEnabled = body.classList.contains('night-mode');
//     localStorage.setItem('nightModeEnabled', nightModeEnabled);
// }

// // Check if the user has a night mode preference in localStorage
// const nightModeEnabled = localStorage.getItem('nightModeEnabled');
// if (nightModeEnabled === 'true') {
//     document.body.classList.add('night-mode');
// }

// // Add an event listener to the night mode button
// const nightModeToggle = document.getElementById('night-mode-toggle');
// nightModeToggle.addEventListener('click', toggleNightMode);

// Function to toggle night mode
function toggleNightMode() {
    const body = document.body;
    const elementsToToggle = document.querySelectorAll('.night-mode-toggle');

    // Toggle night mode class on the body and other elements
    body.classList.toggle('night-mode');
    elementsToToggle.forEach((element) => {
        element.classList.toggle('night-mode');
    });

    // Save the night mode preference in localStorage
    const nightModeEnabled = body.classList.contains('night-mode');
    localStorage.setItem('nightModeEnabled', nightModeEnabled);
}

// Check if the user has a night mode preference in localStorage
const nightModeEnabled = localStorage.getItem('nightModeEnabled');
if (nightModeEnabled === 'true') {
    document.body.classList.add('night-mode');
    const elementsToToggle = document.querySelectorAll('.night-mode-toggle');
    elementsToToggle.forEach((element) => {
        element.classList.add('night-mode');
    });
}

// Add an event listener to the night mode button
const nightModeToggle = document.getElementById('night-mode-toggle');
nightModeToggle.addEventListener('click', toggleNightMode);