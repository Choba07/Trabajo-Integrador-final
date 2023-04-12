  document.querySelector('#contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    swal({
      title: "Mensaje enviado",
      text: "Gracias por contactarnos, nos pondremos en contacto contigo a la brevedad",
      icon: "success",
    });
    document.querySelector('#contact-form').reset();
  });

  