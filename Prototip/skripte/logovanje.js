
const dugmeZaLogovanje = document.getElementById('logovanje');

dugmeZaLogovanje.addEventListener('click', function() {
    const username = document.getElementById('korIme').value;

    console.log(username);

    window.location = 'nutricionista.html';
});
