function handleSubmit(ev){
    ev.preventDefault()
    const f = ev.target
    const name = f.personName.value
    const color = f.color.value
    const age = f.age.value
    const stats = document.querySelector("#stats")

    renderColor(color)

    //stats.innerHTML += `<ul>${name}, age: ${age}</ul>`
    
    
    //list.textContent = `${name}, age ${age} ${color}`

    stats.appendChild(renderList("Name",name,"Age",age,"Color",color))
    // const p = document.createElement('p')
    // p.textContext = `${name}, age ${age}, color ${color}`
    // stats.appendChild(p)

    //stats.style.color = color
}

function renderColor(color){
    const colorDiv = document.createElement('div')
    colorDiv.style.backgroundColor = color
    colorDiv.style.width = '6 rem'
    colorDiv.style.height = '3 rem'
    //colorItem.appendChild(colorDiv)
    return colorDiv
}

function renderListItem(name, value){
    var item = document.createElement('li')
    item.textContent = name+": "+value 
    return item
}

function renderList(n1,v1,n2,v2,n3,v3){
    const list = document.createElement('ul')
    list.appendChild(renderListItem(n1,v1))
    list.appendChild(renderListItem(n2,v2))
    list.appendChild(renderListItem(n3,v3))
    return list
}

const personForm = document.querySelector("#person-form")
personForm.addEventListener("submit", handleSubmit)