<script>
    document.addEventListener("DOMContentLoaded", function() {
        const loginButton = document.getElementById("login-btn");

        if (loginButton) {
            const token = getCookie("token");

            if (token) {
                // If token is present, user is logged in
                loginButton.textContent = "Logout";
                loginButton.addEventListener("click", function() {
                    // Clear token by setting an expired cookie
                    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
                    // Redirect to login page
                    window.location.href = "login.html";
                });
            } else {
                // If token is not present, user is not logged in
                loginButton.textContent = "Login";
                loginButton.href = "login.html"; // Update href attribute with login page URL
            }
        } else {
            console.error("Login button not found!");
        }
    });

    // Function to get cookie by name
    function getCookie(name) {
        const cookies = document.cookie.split(";")
            .map(cookie => cookie.trim().split("="))
            .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {});
        return cookies[name];
    }
</script>