const scriptURL = 'https://script.google.com/macros/s/AKfycbxgRcdi_3LSnc4M6K4UfrMt2HXPPCIGwA5-2eTEUMjsB6NoFMNOtRZ3WyQPhzD5LBTQFw/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})