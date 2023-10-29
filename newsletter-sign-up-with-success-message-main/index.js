const form = document.querySelector('form')
const email = document.querySelector('.input')

form.addEventListener('submit', (e)=>{
    e.preventDefault()

    validateForm()
})


function validateForm(){
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email.value.trim() == '')
    {
        setError(email, "email can't be empty")
    }
    else if(!re.test(email.value.trim()))
    {
        setError(email, "invalid email")
    }
    else{
        setSuccess(email)
    }
}


function setError(element, errorMessage){
    const parent = element.parentElement
    if (parent.classList.contains('.success'))
    {
        parent.classList.remove('success')
    }
    parent.classList.add('error')
    const par = parent.querySelector('span')
    console.log(par)
    par.textContent = errorMessage
    
}


function setSuccess(element){
    const parent = element.parentElement
    if (parent.classList.contains('.error')){
        parent.classList.remove('error')
    }

    parent.classList.add('success')
    form.reset()
}