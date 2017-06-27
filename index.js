function handleSubmit(ev){
    ev.preventDefault()
    const f = ev.target
    const name = f.personName.value
    const age = f.age.value
    const color = f.color.value
    const stats = document.querySelector("#stats")

    stats.innerHTML += `<p>${name}, age: ${age}</p>`
    
    // const p = document.createElement('p')
    // p.textContext = `${name}, age ${age}, color ${color}`
    // stats.appendChild(p)

    stats.style.color = color

}

const personForm = document.querySelector("#person-form")
personForm.addEventListener("submit", handleSubmit)