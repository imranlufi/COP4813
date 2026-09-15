document.getElementById("displayFirstName").textContent =
    sessionStorage.getItem("firstName") || "";

document.getElementById("displayLastName").textContent =
    sessionStorage.getItem("lastName") || "";

document.getElementById("displayAddress").textContent =
    sessionStorage.getItem("address") || "";

document.getElementById("displayCity").textContent =
    sessionStorage.getItem("city") || "";

document.getElementById("displayState").textContent =
    sessionStorage.getItem("state") || "";

document.getElementById("displayZip").textContent =
    sessionStorage.getItem("zip") || "";

document.getElementById("displayPhone").textContent =
    sessionStorage.getItem("phone") || "";

document.getElementById("displayEmail").textContent =
    sessionStorage.getItem("email") || "";

const storedBirthdate = sessionStorage.getItem("birthdate") || "";

if (storedBirthdate) {
    const dateParts = storedBirthdate.split("-");
    document.getElementById("displayBirthdate").textContent =
        dateParts[1] + "/" + dateParts[2] + "/" + dateParts[0];
}

document.getElementById("displayMessage").textContent =
    sessionStorage.getItem("message") || "";

document.getElementById("editButton").addEventListener("click", function () {
    window.location.href = "form.html";
});

document.getElementById("confirmButton").addEventListener("click", function () {
    const email = sessionStorage.getItem("email") || "";
    const firstName = sessionStorage.getItem("firstName") || "";
    const lastName = sessionStorage.getItem("lastName") || "";
    const address = sessionStorage.getItem("address") || "";
    const city = sessionStorage.getItem("city") || "";
    const state = sessionStorage.getItem("state") || "";
    const zip = sessionStorage.getItem("zip") || "";
    const phone = sessionStorage.getItem("phone") || "";
    const birthdate = sessionStorage.getItem("birthdate") || "";
    const message = sessionStorage.getItem("message") || "";

    const subject = encodeURIComponent("COP4813 Form Submission");

    const body = encodeURIComponent(
        "First Name: " + firstName +
        "\nLast Name: " + lastName +
        "\nAddress: " + address +
        "\nCity: " + city +
        "\nState: " + state +
        "\nZIP Code: " + zip +
        "\nPhone Number: " + phone +
        "\nEmail Address: " + email +
        "\nBirth Date: " + birthdate +
        "\nMessage: " + message
    );

    window.location.href =
        "mailto:" + email + "?subject=" + subject + "&body=" + body;
});