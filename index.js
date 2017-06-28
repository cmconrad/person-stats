function handleSubmit(ev){
    ev.preventDefault()
    const f     = ev.target
    const name  = f.personName.value
    const color = f.color.value
    const age   = f.age.value
    const stats = document.querySelector("#stats")
    stats.appendChild(renderList("Name",name,"Age",age,"Color",color))
}

function renderColor(color){
    const colorDiv  = document.createElement('div')
    colorDiv.style.backgroundColor = color
    colorDiv.style.width = '6rem'
    colorDiv.style.height = '3rem'
    return colorDiv
}

function renderListItem(name, value){
    var item = document.createElement('li')
    item.textContent = name+": "+value 
    return item
}

function renderList(n1,v1,n2,v2,n3,v3){
    const list = document.createElement('ul')
    list.appendChild(renderListItem(n1,v1)) // Name
    list.appendChild(renderListItem(n2,v2)) // Age
    list.appendChild(renderListItem(n3,v3)) // Color
    list.appendChild(renderColor(v3))       // Color Block
    return list
}

const personForm = document.querySelector("#person-form")
personForm.addEventListener("submit", handleSubmit)