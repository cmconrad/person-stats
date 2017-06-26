function updateHeading(ev) {
    ev.preventDefault()
    const f = ev.target
    const nameField = f.personName.value
    const heading = document.querySelector("h1")
    heading.innerHTML = nameField
}

const personForm = document.querySelector("#person-form")
personForm.addEventListener("submit",updateHeading)

