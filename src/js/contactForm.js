// Uses an AWS Lambda function to handle contact form requests
// AWS API Gateway throttles and denies bad requests

const contactForm = document.forms['contactForm']
const emailInput = contactForm.querySelector('input[name="email"]')
const nameInput = contactForm.querySelector('input[name="name"]')
const messageInput = contactForm.querySelector('textarea[name="message"]')

const API_KEY = '8mpa0asspd3c83FeYnBG7703Nr2l1cnQYcX13voi'
const API_ENDPOINT = 'https://vhc27uivol.execute-api.eu-west-1.amazonaws.com/default/feastedContactForm'

contactForm.addEventListener('submit', submitContactForm)

function submitContactForm(e) {
  e.preventDefault()
  const data = JSON.stringify({
    email: emailInput.value,
    name: nameInput.value,
    message: messageInput.value
  })

  console.log(data);
  axios({
    url: API_ENDPOINT,
    data,
    method: 'POST',
    headers: {
      'x-api-key': API_KEY
    }
  })
    .then(res =>
      window.location = '/contact-form/success'
    )
    .catch(err => {
      console.log(err.response)
      window.location = '/contact-form/error'
    })
}
