const toggler = document.getElementById('toggler')
const body = document.getElementById('body')

toggler.addEventListener('change', ()=> {
  body.classList.toggle('dark')
})