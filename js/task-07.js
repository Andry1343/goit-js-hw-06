
const sizeControl = document.querySelector('#font-size-control')
const abracadabra = document.querySelector('#text')
sizeControl.value = 16;
sizeControl.addEventListener('input', (event) => {
    abracadabra.style.fontSize = sizeControl.value + 'px'
})
