// Get the elements by their IDs

const textElement = document.getElementById('text__para');
const buttonElement = document.getElementById('changeColorBtn');

// Function to change text color

function changeTextColor () {
    // Generate a random color
    const randomColor = getRandomColor ();

    // Apply the color to the text
    textElement.style.color = randomColor;
}

// Function to generate a random color

function getRandomColor () {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color
}

// Attach the click event to the button

buttonElement.addEventListener('click', changeTextColor);