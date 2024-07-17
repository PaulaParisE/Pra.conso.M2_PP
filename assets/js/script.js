document.getElementById('my-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Obtener valores de los campos del formulario
    var name = document.querySelector('input[name="name"]').value;
    var phone = document.querySelector('input[name="phone"]').value;
    var email = document.querySelector('input[name="email"]').value;
    
    // Validar los campos
    if (!name) {
        alert('Por favor, ingresa tu nombre.');
        return;
    }

    if (!phone) {
        alert('Por favor, ingresa tu teléfono.');
        return;
    }

    if (!email) {
        alert('Por favor, ingresa tu email.');
        return;
    }

    // Validar formato de email
    var emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        alert('Por favor, ingresa un email válido.');
        return;
    }

    // Si todo está bien, enviar el formulario
    alert('Formulario enviado exitosamente');
    document.getElementById('my-form').submit();
});

