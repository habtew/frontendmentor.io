const box = document.querySelector('.box')
const resultH = document.querySelector('.result p')
let data = []
let elem = ''

fetch('./data.json')
    .then(res => res.json())
    .then(data => {
        let result = 0
        for(let i = 0; i < data.length; i++)
        {
            result += data[i].score
            elem += `<div class="summary-box" style="background-color:${data[i].bg};"/>
                        <img src=${data[i].icon} >
                        <p style="color:${data[i].color}">${data[i].category}</p>
                        <p class="p--result"><span>${data[i].score}</span>/100</p>
                    </div>`
        }

        box.innerHTML = elem
        resultH.textContent = Math.round(result / i)
    })
