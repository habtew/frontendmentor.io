const form = document.querySelector('form')
const date = document.querySelector('#dd')
const month = document.querySelector('#mm')
const year = document.querySelector('#yy')
let dates = {dd: 0, mm: 0, yy: 0}

form.addEventListener('submit', (e)=>{
    e.preventDefault()

    validateForm()
    if (dates.dd && dates.mm && dates.yy)
    {
        console.log(dates)

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
        dates.dd = date.value
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
        dates.mm = month.value
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
        dates.yy = year.value
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
    // element.value = NaN
}

function setSuccess(element){
    const parent = element.parentElement
    if (parent.classList.contains('success'))
    {
        parent.classList.remove('error')
    }
    parent.classList.add('success')
    
}