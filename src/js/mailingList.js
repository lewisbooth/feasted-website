const mailingListForm = $('form[name=mailingList')

mailingListForm.addEventListener('submit', submitMailingList)

function submitMailingList(e) {
  e.preventDefault()
  window.location = '/contact-form'
}