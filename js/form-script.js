const scriptURL = 'https://script.google.com/macros/s/AKfycbzF6XG-9yDC26Fq14eurgp8MjE1VuJLIG4lCCbg1ufUizvKRUAiMP3wySmNEid3jLlhvA/exec'
const form = document.forms['contact-form']

form.addEventListener('submit', e => {
 e.preventDefault()
 fetch(scriptURL, { method: 'POST', body: new FormData(form)})
 .then(response => alert("Thanks for reaching out!" ))
 .then(() => { window.location.reload(); })
 .catch(error => console.error('Error!', error.message))
})

