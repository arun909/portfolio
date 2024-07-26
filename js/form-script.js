const scriptURL = 'https://script.google.com/macros/s/AKfycbwvlnOlLcFqbv6d2dBM6Ooa_23JmooiQo-z7jqE7ugGiX6xkUqvR9_Mn6i64UjxSNv2IA/exec'
const form = document.forms['contact-form']

form.addEventListener('submit', e => {
 e.preventDefault()
 fetch(scriptURL, { method: 'POST', body: new FormData(form)})
 .then(response => alert("Thank you! your form is submitted successfully." ))
 .then(() => { window.location.reload(); })
 .catch(error => console.error('Error!', error.message))
})
