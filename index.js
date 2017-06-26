const arrayList = new Array() 

function updateHeading(ev) {
    ev.preventDefault()
    const f = ev.target
    const nameField = f.personName.value
    const heading = document.querySelector("h1")
    heading.innerHTML = nameField
}

function updateDiv(ev){
    ev.preventDefault()
    const f = ev.target
    const nameField = f.personName.value
    const div = document.querySelector("div")
    arrayList.push(nameField)
    div.innerHTML = nameField
}

function updateColor(ev){
    ev.preventDefault()
    const f = ev.target
    const colorField = f.color.value
    const div = document.querySelector("div")
    arrayList.push(colorField)
    div.textContent = arrayList
    document.querySelector("#stats").style.color = colorField
}

const personForm = document.querySelector("#person-form")
personForm.addEventListener("submit",updateHeading)
personForm.addEventListener("submit", updateDiv)

const colorForm = document.querySelector("#color-form")
colorForm.addEventListener("submit",updateColor)