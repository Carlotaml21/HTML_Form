
document.addEventListener('DOMContentLoaded', () => {
    
    const form = document.getElementById('userForm');

    
    form.addEventListener('submit', (event) => {
        event.preventDefault(); 

        
        const name = document.getElementById('name').value;
        const email = document.getElementById('mail').value;
        const age = document.getElementById('age').value;
        const selectOption = document.getElementById('select').value;

        
        let recommend = '';
        const radios = document.getElementsByName('recommend');
        for (const radio of radios) {
            if (radio.checked) {
                recommend = radio.value;
                break;
            }
        }

        
        const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
        const languages = Array.from(checkboxes).map(checkbox => checkbox.value);

        const comments = document.getElementById('comments').value;

        alert('The data has been sent');

        console.log('Nombre:', name);
        console.log('Email:', email);
        console.log('Edad:', age);
        console.log('Opción seleccionada:', selectOption);
        console.log('Recomendación:', recommend || 'No seleccionada');
        console.log('Lenguajes conocidos:', languages);
        console.log('Comentarios:', comments);
    });
});



