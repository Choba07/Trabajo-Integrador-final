document.querySelector('#contact-form').addEventListener('submit', function(event) {
  event.preventDefault();
  swal({
    title: "Mensaje enviado",
    text: "Gracias por contactarnos, nos pondremos en contacto contigo a la brevedad",
    icon: "success",
  });
  document.querySelector('#contact-form').reset();
});

fetch('productos.json')
  .then(response => response.json())
  .then(data => {
    console.log(data); // Imprime los datos del archivo JSON en la consola
    
    const buyButtons = document.querySelectorAll('.buy-button'); // Selecciona todos los botones de compra
    buyButtons.forEach(button => {
      button.addEventListener('click', () => {
        const productName = button.parentElement.querySelector('h3').innerText; // Obtiene el nombre del producto del elemento h3 dentro del elemento padre del botón
        Swal.fire({
          title: `Has añadido ${productName} a tu carrito de compras`,
          icon: 'success',
          confirmButtonText: 'Aceptar'
        });
      });
    });
  });













