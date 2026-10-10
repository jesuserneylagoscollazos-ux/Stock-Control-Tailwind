
const loginForm = document.getElementById('login-form')


loginForm.addEventListener('click', (e) => {

    e.preventDefault()
    
    const icono = e.target.closest('[data-lucide]')

    if(!icono) return

    const inputPassword = loginForm.querySelector('.input-password')
    
    const iconoActual = icono.dataset.lucide === 'eye' ? 'eye-off' : 'eye'
    
    if(iconoActual === 'eye'){
        inputPassword.setAttribute('type', 'text')
    }else{ 
        inputPassword.setAttribute('type', 'password')
    }
    
    icono.setAttribute('data-lucide', iconoActual)
    
    lucide.createIcons()

})

const routeRegister = document.getElementById('route-register')

routeRegister.addEventListener('click', () => window.location.href = '../register.html')