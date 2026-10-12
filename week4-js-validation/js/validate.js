// Week 4 - JavaScript validation for the registration page

const form = document.getElementById("regForm");

function setError(id, message) {
    document.getElementById(id + "Err").textContent = message;
    return message === "";           // true when the field is valid
}

function validateFullname() {
    const v = document.getElementById("fullname").value.trim();
    if (v === "") return setError("fullname", "Full name is required");
    if (v.length < 3) return setError("fullname", "Name must be at least 3 characters");
    if (!/^[A-Za-z ]+$/.test(v)) return setError("fullname", "Only letters and spaces allowed");
    return setError("fullname", "");
}

function validateEmail() {
    const v = document.getElementById("email").value.trim();
    if (v === "") return setError("email", "Email is required");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)) return setError("email", "Enter a valid email address");
    return setError("email", "");
}

function validatePassword() {
    const v = document.getElementById("password").value;
    if (v === "") return setError("password", "Password is required");
    if (v.length < 6) return setError("password", "Password must be at least 6 characters");
    if (!/[A-Za-z]/.test(v) || !/[0-9]/.test(v)) return setError("password", "Use both letters and numbers");
    return setError("password", "");
}

function validateConfirm() {
    const p = document.getElementById("password").value;
    const c = document.getElementById("confirm").value;
    if (c === "") return setError("confirm", "Please confirm your password");
    if (p !== c) return setError("confirm", "Passwords do not match");
    return setError("confirm", "");
}

function validatePhone() {
    const v = document.getElementById("phone").value.trim();
    if (v === "") return setError("phone", "Phone number is required");
    if (!/^[6-9][0-9]{9}$/.test(v)) return setError("phone", "Enter a 10-digit number starting with 6-9");
    return setError("phone", "");
}

function validateDob() {
    const v = document.getElementById("dob").value;
    if (v === "") return setError("dob", "Date of birth is required");
    const dob = new Date(v), today = new Date();
    if (dob >= today) return setError("dob", "Date of birth must be in the past");
    let age = today.getFullYear() - dob.getFullYear();
    const m = today.getMonth() - dob.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) age--;
    if (age < 16) return setError("dob", "You must be at least 16 years old");
    return setError("dob", "");
}

function validateGender() {
    const chosen = document.querySelector('input[name="gender"]:checked');
    return setError("gender", chosen ? "" : "Please select a gender");
}

function validateCourse() {
    const v = document.getElementById("course").value;
    return setError("course", v === "" ? "Please select a course" : "");
}

function validateAddress() {
    const v = document.getElementById("address").value.trim();
    if (v === "") return setError("address", "Address is required");
    if (v.length < 10) return setError("address", "Address must be at least 10 characters");
    return setError("address", "");
}

function validateTerms() {
    const ok = document.getElementById("terms").checked;
    return setError("terms", ok ? "" : "You must accept the terms");
}

// Live validation while typing / leaving a field
document.getElementById("fullname").addEventListener("blur", validateFullname);
document.getElementById("email").addEventListener("blur", validateEmail);
document.getElementById("password").addEventListener("blur", validatePassword);
document.getElementById("confirm").addEventListener("blur", validateConfirm);
document.getElementById("phone").addEventListener("blur", validatePhone);

// Validate everything on submit
form.addEventListener("submit", function (e) {
    const results = [
        validateFullname(), validateEmail(), validatePassword(), validateConfirm(),
        validatePhone(), validateDob(), validateGender(), validateCourse(),
        validateAddress(), validateTerms()
    ];
    if (results.includes(false)) {
        e.preventDefault();          // stop submission
    } else {
        e.preventDefault();
        alert("Registration successful!");
        form.reset();
    }
});

form.addEventListener("reset", function () {
    document.querySelectorAll(".error").forEach(s => s.textContent = "");
});
