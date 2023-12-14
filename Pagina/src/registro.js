function validateForm() {
  const nombre = document.getElementById("nombre").value;
  const correo = document.getElementById("correo").value;
  const edad = document.getElementById("edad").value;
  const telmovil = document.getElementById("telmovil").value;
  const genero = document.getElementById("genero").value;
  const provincia = document.getElementById("provincia").value;
  const contrasena = document.getElementById("contrasena").value;
  const confirmarContrasena = document.getElementById("confirmar-contrasena").value;
  const hcaptchaResponse = typeof hcaptcha !== 'undefined' ? hcaptcha.getResponse() : '';

  // Arreglo para almacenar los mensajes de error
  const errors = [];

  // Validar que los campos no estén vacíos
  if (!nombre) {
    errors.push("Por favor, ingrese su nombre.");
  }

  if (!correo) {
    errors.push("Por favor, ingrese su correo electrónico.");
  }

  if (!edad) {
    errors.push("Por favor, ingrese su edad.");
  }

  if (!telmovil) {
    errors.push("Por favor, ingrese su teléfono móvil.");
  }

  if (!genero) {
    errors.push("Por favor, ingrese su género.");
  }

  if (!provincia) {
    errors.push("Por favor, ingrese su provincia.");
  }

  if (!contrasena) {
    errors.push("Por favor, ingrese su contraseña.");
  }

  if (!confirmarContrasena) {
    errors.push("Por favor, confirme su contraseña.");
  }

  // Validar que las contraseñas coincidan
  if (contrasena !== confirmarContrasena) {
    errors.push("Las contraseñas no coinciden.");
  }

  // Ejecuta la verificación manual del hCaptcha
  if (!hcaptchaResponse) {
    errors.push("Por favor, resuelva el captcha antes de enviar el formulario.");
  }

  // Si hay errores, mostrar todas las alertas y no enviar el formulario
  if (errors.length > 0) {
    alert(errors.join("\n"));
    return false;
  }

  // Captcha resuelto correctamente, se pueden enviar los datos del formulario
  sendDataToServer(nombre, correo, edad, telmovil, genero, provincia, contrasena); // Llamada a la función para enviar los datos
  return false; // Evita que el formulario se envíe de forma predeterminada
}
