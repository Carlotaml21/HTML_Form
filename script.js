// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('userForm');

    // Escuchar el evento de envío del formulario
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Evita el envío real del formulario

        // Capturar los valores de los campos
        const name = document.getElementById('name').value;
        const email = document.getElementById('mail').value;
        const age = document.getElementById('age').value;
        const selectOption = document.getElementById('select').value;

        // Capturar el valor del radio seleccionado
        const recommend = document.querySelector('input[name="recommend"]:checked')?.value;

        // Capturar los checkboxes seleccionados
        const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
        const languages = Array.from(checkboxes).map(checkbox => checkbox.value);

        // Capturar los comentarios
        const comments = document.getElementById('comments').value;

        // Mostrar alerta de confirmación
        alert('¡Datos enviados correctamente!');

        // Imprimir los datos en la consola
        console.log('Nombre:', name);
        console.log('Email:', email);
        console.log('Edad:', age);
        console.log('Opción seleccionada:', selectOption);
        console.log('Recomendaría este sitio:', recommend || 'No seleccionado');
        console.log('Lenguajes conocidos:', languages);
        console.log('Comentarios:', comments);
    });
});


