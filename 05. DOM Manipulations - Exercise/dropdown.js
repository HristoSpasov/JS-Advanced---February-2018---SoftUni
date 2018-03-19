function addItem() {
    let text = document.querySelector('#newItemText');
    let value = document.querySelector('#newItemValue');

    if(text.value.length === 0 || value.value.length === 0) return;

    let newOption = document.createElement('option');
    newOption.textContent = text.value;
    newOption.value = value.value;

    document.querySelector('#menu').appendChild(newOption);

    text.value = '';
    value.value = '';
}