document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.getElementById('signup-form');
    const loginForm = document.getElementById('login-form');

    signupForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('signup-username').value;
        const password = document.getElementById('signup-password').value;
        
        // Check if user already exists
        if (localStorage.getItem(username)) {
            alert('Username already exists! Please choose another one.');
        } else {
            // Store username and password in local storage
            localStorage.setItem(username, password);
            alert('Signup successful! Please login.');
        }

        // Clear form fields
        signupForm.reset();
    });

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('login-username').value;
        const password = document.getElementById('login-password').value;

        // Check if username exists and password matches
        if (localStorage.getItem(username) === password) {
            alert('Login successful!');
        } else {
            alert('Invalid username or password!');
        }

        // Clear form fields
        loginForm.reset();
    });
});
