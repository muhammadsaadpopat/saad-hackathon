// Get form and display elements
const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement;

// Handle form submission
form.addEventListener('submit', (event: Event) => {
    event.preventDefault(); // Prevent page reload

    // Collect input values
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;

    // Check if the display element exists
    if (resumeDisplayElement) {
        // Display the collected data
        resumeDisplayElement.innerHTML = `
            <h3>Editable Resume</h3>
            <p><strong>Name:</strong> <span contenteditable="true">${name}</span></p>
            <p><strong>Email:</strong> <span contenteditable="true">${email}</span></p>
            <p><strong>Phone:</strong> <span contenteditable="true">${phone}</span></p>
            <p><strong>Education:</strong> <span contenteditable="true">${education}</span></p>
            <p><strong>Experience:</strong> <span contenteditable="true">${experience}</span></p>
            <p><strong>Skills:</strong> <span contenteditable="true">${skills}</span></p>
        `;
    } else {
        console.error('The display element is missing');
    }
});
