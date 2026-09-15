const form = document.getElementById("contactForm");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const address = document.getElementById("address").value.trim();
    const city = document.getElementById("city").value.trim();
    const state = document.getElementById("state").value;
    const zip = document.getElementById("zip").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const email = document.getElementById("email").value.trim();
    const birthdate = document.getElementById("birthdate").value;
    const message = document.getElementById("message").value.trim();
    const confirm = document.getElementById("confirm").value.trim();

    if (
        firstName === "" ||
        lastName === "" ||
        address === "" ||
        city === "" ||
        state === "" ||
        zip === "" ||
        phone === "" ||
        email === "" ||
        birthdate === "" ||
        message === "" ||
        confirm === ""
    ) {
        alert("Please complete all fields.");
        return;
    }

    const zipPattern = /^\d{5}$/;

    if (!zipPattern.test(zip)) {
        alert("Please enter a valid 5-digit ZIP code.");
        return;
    }

    const phonePattern = /^\(\d{3}\)\d{3}-\d{4}$/;

    if (!phonePattern.test(phone)) {
        alert("Please enter the phone number in this format: (000)000-0000");
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    const birthDateValue = new Date(birthdate + "T00:00:00");
    const today = new Date();

    today.setHours(0, 0, 0, 0);

    if (birthDateValue > today) {
        alert("Birth date cannot be in the future.");
        return;
    }

    if (confirm !== "11") {
        alert("The security question answer is incorrect.");
        return;
    }

    sessionStorage.setItem("firstName", firstName);
    sessionStorage.setItem("lastName", lastName);
    sessionStorage.setItem("address", address);
    sessionStorage.setItem("city", city);
    sessionStorage.setItem("state", state);
    sessionStorage.setItem("zip", zip);
    sessionStorage.setItem("phone", phone);
    sessionStorage.setItem("email", email);
    sessionStorage.setItem("birthdate", birthdate);
    sessionStorage.setItem("message", message);

    window.location.href = "confirm.html";
});
window.addEventListener("load", function () {
    document.getElementById("firstName").value = sessionStorage.getItem("firstName") || "";
    document.getElementById("lastName").value = sessionStorage.getItem("lastName") || "";
    document.getElementById("address").value = sessionStorage.getItem("address") || "";
    document.getElementById("city").value = sessionStorage.getItem("city") || "";
    document.getElementById("state").value = sessionStorage.getItem("state") || "";
    document.getElementById("zip").value = sessionStorage.getItem("zip") || "";
    document.getElementById("phone").value = sessionStorage.getItem("phone") || "";
    document.getElementById("email").value = sessionStorage.getItem("email") || "";
    document.getElementById("birthdate").value = sessionStorage.getItem("birthdate") || "";
    document.getElementById("message").value = sessionStorage.getItem("message") || "";
});