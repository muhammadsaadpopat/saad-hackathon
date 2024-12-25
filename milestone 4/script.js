// Get form and display elements
var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
// Handle form submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent page reload
    // Collect input values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // Check if the display element exists
    if (resumeDisplayElement) {
        // Display the collected data
        resumeDisplayElement.innerHTML = "\n            <h3>Editable Resume</h3>\n            <p><strong>Name:</strong> <span contenteditable=\"true\">".concat(name, "</span></p>\n            <p><strong>Email:</strong> <span contenteditable=\"true\">").concat(email, "</span></p>\n            <p><strong>Phone:</strong> <span contenteditable=\"true\">").concat(phone, "</span></p>\n            <p><strong>Education:</strong> <span contenteditable=\"true\">").concat(education, "</span></p>\n            <p><strong>Experience:</strong> <span contenteditable=\"true\">").concat(experience, "</span></p>\n            <p><strong>Skills:</strong> <span contenteditable=\"true\">").concat(skills, "</span></p>\n        ");
    }
    else {
        console.error('The display element is missing');
    }
});
