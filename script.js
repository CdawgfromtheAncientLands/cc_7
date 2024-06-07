document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('feedback-form');
    const feedbackDisplay = document.getElementById('feedback-display');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); //Prevent the form from submitting normally

        const name = document.getElementById('name').value;
        const rating = document.getElementById('rating').value;
        const comments = document.getElementById('comments').value;

        //Validate that all fields are filled out
        if (!name || !rating || !comments) {
            alert('Please fill out all fields.');
            return;
        }

        //Append the feedback to the display area
        const feedback = document.createElement('div');
        feedback.classList.add('feedback-item');
        feedback.innerHTML = `
            <h3>${name}</h3>
            <p>Rating: ${rating}</p>
            <p>${comments}</p>
        `;
        feedbackDisplay.appendChild(feedback);

        // Clear the form
        form.reset();
    });
});