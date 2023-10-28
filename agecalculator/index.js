const form = document.querySelector('form')
const date = document.querySelector('#dd')
const month = document.querySelector('#mm')
const year = document.querySelector('#yy')


form.addEventListener('submit', (e)=>{
    e.preventDefault()

    validateForm()
    if (date.value && month.value && year.value)
    {
        console.log(date.value, month.value, year.value)
    }
})


function validateForm(){
    if (date.value.trim() == '')
    {
        setError(date, "empty not allowed")
    }
    else if(date.value.trim() < 0 || date.value.trim() > 31)
    {
        setError(date, "Invalid input")
    }
    else{
        setSuccess(date)
    }
    // for month
    if (month.value.trim() == '')
    {
        setError(month, "empty not allowed")
    }
    else if(month.value.trim() < 0 || month.value.trim() > 12)
    {
        setError(month, "Invalid input")
    }
    else{
        setSuccess(month)
    }

    // year

    if (year.value.trim() == '')
    {
        setError(year, "empty not allowed")
    }
    else if(year.value.trim().length != 4)
    {
        setError(year, "Invalid input")
    }
    else{
        setSuccess(year)
    }

}


function setError(element, errorMessage){
    const parent = element.parentElement
    if (parent.classList.contains('success'))
    {
        parent.classList.remove('success')
    }
    parent.classList.add('error')
    const paragraph = parent.querySelector('p')
    paragraph.textContent = errorMessage
    element.value = NaN
}

function setSuccess(element){
    const parent = element.parentElement
    if (parent.classList.contains('success'))
    {
        parent.classList.remove('error')
    }
    parent.classList.add('success')
    
}