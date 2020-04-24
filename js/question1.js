const form = document.querySelector("#contactForm");
form.addEventListener("submit", validate);

function validate(event) {
    event.preventDefault();

    const error = document.querySelector("#firstNameError");

    if(document.querySelector("#firstName").value.length >= 2) {
        error.style.display = "none";
    } else {
        error.style.display = "block";
    }
}