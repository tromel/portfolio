const scriptURL = "https://script.google.com/macros/s/AKfycbwsjBZDcLsU9jSC4XtLof8BTRoo-KkJyga5NDXjyGMTFdYgqNFy/exec"
const form = document.forms["submit-to-google-sheet"]

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => alert('Melding sendt!'))
        .catch(error => console.error('Error!', error.message))
    form.reset();
})