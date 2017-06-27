function handleSubmit(ev){
    ev.preventDefault()
    const f = ev.target
    const name = f.personName.value
    const age = f.age.value
    const color = f.color.value
    const stats = document.querySelector("#stats")
    stats.innerHTML = `<p>${name}, age ${age}, color ${color}</p>`
    document.querySelector("#stats").style.color = color
    //stats.innerHTML = name + age
}

const personForm = document.querySelector("#person-form")
personForm.addEventListener("submit", handleSubmit)