// Verifica si hay sesión activa
if (localStorage.getItem('isLoggedIn') !== 'true') {
    window.location.href = 'index.html'; // Redirige al login si no ha iniciado sesión
}

// Función para cerrar sesión
function logout() {
    localStorage.removeItem('isLoggedIn');
    window.location.href = 'index.html';
}
