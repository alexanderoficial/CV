// Obtener los elementos del formulario y del contenedor de certificaciones
const loginForm = document.getElementById("loginForm");
const apodo = document.querySelector(".apodo");

// Agregar un evento de escucha al formulario de inicio de sesión
loginForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Verificar si la contraseña es correcta y mostrar una alerta correspondiente
    if (password === "Alexander2023") {
        alert("¡Inicio de sesión exitoso! Bienvenido");
        // Redireccionar a la página de certificaciones.html
        window.location.href = 'certificaciones.html';
    } else {
        alert("Oops... Contraseña incorrecta");
    }
});
