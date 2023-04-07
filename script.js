const form = document.querySelector('#contact-form');
form.addEventListener('submit', function(event) {
  event.preventDefault();
  const name = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;
  const message = document.querySelector('#message').value;
  
  // Guardar la información en una base de datos o en una variable
  // Por ejemplo, aquí lo estamos mostrando en la consola
  console.log(`Nombre: ${name}\nEmail: ${email}\nMensaje: ${message}`);

  // Mostrar una alerta de que la información se envió correctamente
  alert('¡Gracias por enviar tu información!');
});



