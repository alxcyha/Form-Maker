
let displayOption = document.getElementById('type');
let displayButton = document.getElementById('button');

function displaySelection() {
    displayOption.style.display = 'block';
    displayButton.style.display = 'block';
}  

/**
 * A function that hides the selection and the create button
 */
function hideSelection() {
    displayOption.style.display = 'none';
    displayButton.style.display = 'none';

}

function createBox() {

    let selected = document.getElementById('type');
    let selectedValue = Number.parseInt(selected.value);

    switch(selectedValue) {
        
        case 2:
            appendRadio();
            break;
        
        case 3:
            appendCheckBox();
            break;
    }

}


function appendCheckBox() {

    // Create a new container div
    const container = document.createElement('div');
    container.className = 'd-flex flex-column container px-4 py-3 boxes bg-light';

    // Create a new container div
    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Question';
    input.className = 'p-2';
    input.style.width = '100%';

    // Add the input to the container
    container.append(input);

    // Create a checkbox container
    const checkContainer = document.createElement('div');
    checkContainer.className = 'd-flex gap-1 flex-column mt-3'

    // Create checkbox
    const checkbox1 = createCheckBox('1', 'test');
    checkContainer.appendChild(checkbox1);

    const checkbox2 = createCheckBox('2', 'test');
    checkContainer.appendChild(checkbox2);

    const checkbox3 = createCheckBox('3', 'test');
    checkContainer.appendChild(checkbox3);

    container.appendChild(checkContainer);

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('btn', 'btn-danger', 'delete-button');
    deleteButton.style.backgroundColor = '#9932CC';
    deleteButton.style.borderColor = '#9932CC';
    deleteButton.style.float = 'right';
    deleteButton.innerText = 'Delete';

    deleteButton.addEventListener('mouseover', () => {
        deleteButton.style.backgroundColor = '#8B008B';
        deleteButton.style.borderColor = '#8B008B';
    });

    deleteButton.addEventListener('mouseout', () => {
    deleteButton.style.backgroundColor = '#9932CC';
    deleteButton.style.borderColor = '#9932CC';
    });

    /**
     * Add an event listener in this button
     */
    deleteButton.addEventListener('click', () => {
        deleteContainer(container);
    });

    container.appendChild(deleteButton);

    // Append the new container div to the #boxes-uwu element
    const box = document.getElementById('display');
    box.appendChild(container);

}

/**
 * A function that creates the checkbutton
 * @param {string} value string representing the value for the checkbox
 * @param {string} label string representing the label for the checkbox
 */
function createCheckBox(value, label) {

    console.log(label);
    const checkboxLabel = document.createElement('label');
    const checkBox = document.createElement('input');

    checkBox.type = 'checkbox';
    checkBox.value = value;
    
    // Adding
    checkboxLabel.append(checkBox);
    checkboxLabel.append(label);

    return checkBox;

}

/**
 * A function will be invoked if the selected value(option) is for radio
 */
function appendRadio() {
    
    // Create a new container div
    const container = document.createElement('div');
    container.className = 'd-flex flex-column container px-4 py-3 boxes bg-light';

    // Create a new input element
    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Question';
    input.className = 'p-2';
    input.style.width = '100%';

    //Create radio buttons
    const radio1 = createRadio('flexRadioDefault1', 'Default radio');
    const radio2 = createRadio('flexRadioDefault2', 'Default checked radio');

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('btn', 'btn-danger', 'delete-button');
    deleteButton.style.backgroundColor = '#9932CC';
    deleteButton.style.borderColor = '#9932CC';
    deleteButton.style.float = 'right';
    deleteButton.innerText = 'Delete';

    deleteButton.addEventListener('mouseover', () => {
        deleteButton.style.backgroundColor = '#8B008B';
        deleteButton.style.borderColor = '#8B008B';
    });

    deleteButton.addEventListener('mouseout', () => {
    deleteButton.style.backgroundColor = '#9932CC';
    deleteButton.style.borderColor = '#9932CC';
    });

    /**
     * Add an event listener in this button
     */
    deleteButton.addEventListener('click', () => {
        deleteContainer(container);
    });

    // Add the elements to the container
    container.appendChild(input);
    container.appendChild(document.createElement('br'));
    container.appendChild(document.createElement('br'));
    container.appendChild(radio1);
    container.appendChild(radio2);
    container.appendChild(document.createElement('br'));
    container.appendChild(deleteButton);

    // Append the new container div to the #boxes-uwu element
    const box = document.getElementById('display');
    box.append(container);

    console.log(document.getElementById('display'));

}

/**
 * 
 * @param {string} id 
 * @param {string} label 
 * @returns 
 */
function createRadio(id, label) {
  const radio = document.createElement('input');
  radio.type = 'radio';
  radio.name = 'flexRadioDefault';
  radio.id = id;
  radio.classList.add('form-check-input');

  const radioLabel = document.createElement('label');
  radioLabel.classList.add('form-check-label');
  radioLabel.htmlFor = id;
  radioLabel.innerText = label;

  const radioDiv = document.createElement('div');
  radioDiv.classList.add('form-check');
  radioDiv.appendChild(radio);
  radioDiv.appendChild(radioLabel);

  return radioDiv;
}

/**
 * A function that allows the user to delete a specific box
 * @param {object} container 
 */
function deleteContainer(container) {
    container.remove();
}