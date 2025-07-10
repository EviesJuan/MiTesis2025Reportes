document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const validUser = 'Reporte';
    const validPass = 'corpoelec2025';

    if (username === validUser && password === validPass) {
        localStorage.setItem('isLoggedIn', 'true');
        window.location.href = 'index1.html';
    } else {
        document.getElementById('errorMessage').style.display = 'block';
    }
});


