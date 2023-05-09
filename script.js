const insert = () => {
    let type = document.querySelector('#type').value 
    let label = document.querySelector('#label').value 

    switch(type){
        case 'text': appendText(label)
            break
        case 'button': appendButton(label)
            break
    }
}

const appendText = (label = "No label") => {
    let el = document.createElement('input')

    el.setAttribute('type', 'text')
    el.setAttribute('class', 'form-control mt-2')
    el.setAttribute('placeholder', label)

    document.querySelector('#display').append(el)
    
}

const appendButton = (label = "No label") => {
    let el = document.createElement('button')

    el.setAttribute('type', 'text')
    el.setAttribute('class', 'btn btn-primary mt-2') 
    el.textContent = label

    document.querySelector('#display').append(el)
}