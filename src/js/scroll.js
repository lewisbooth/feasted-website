const scrollElements = $$('.scroll')

scrollElements.forEach(element => {
  element.addEventListener('click', e => {
    if (!$(element.hash)) return
    e.preventDefault()
    $(element.hash).scrollIntoView({ behavior: "smooth" })
  })
})