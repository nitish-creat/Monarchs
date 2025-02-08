document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".submit").addEventListener("click", function (event) {
        event.preventDefault();

        const email = document.querySelector(".input-mail").value;
        const password = document.querySelector(".input-pwd").value;

        // Retrieve stored data
        const storedEmail = localStorage.getItem("email");
        const storedPassword = localStorage.getItem("password");

        if (email === storedEmail && password === storedPassword) {
            alert("Login successful!");
            window.location.href = "main.html"; // Redirect to Main Page
        } else {
            alert("Invalid Email or Password!");
        }
    });
});
