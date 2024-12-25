//button toogle main process//
var buttontoggling = document.getElementById("toggle-skills");
var skills = document.getElementById("skills");
buttontoggling.addEventListener("click", function () {
    if (skills.style.display === 'none') {
        skills.style.display = 'block';
    }
    else {
        skills.style.display = 'none';
    }
});
