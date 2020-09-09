const contactForm = $('form[name=contactForm')

contactForm.addEventListener('submit', submitContactForm)

function submitContactForm(e) {
  e.preventDefault()
  window.location = '/contact-form'
}