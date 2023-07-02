document.getElementById("login-button").addEventListener("click", function(event) {
    event.preventDefault(); // Evita que el formulario se envíe
  
    // Obtén los valores del nombre de usuario y la contraseña
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    // Validar los datos del inicio de sesión
    if (username === "user" && password === "123456789") {
      alert("Inicio de sesión exitoso");
    } else {
      alert("Nombre de usuario o contraseña incorrectos");
    }
  });
  