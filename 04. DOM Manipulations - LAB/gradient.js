function attachGradientEvents() {
    let box = document.querySelector('#gradient');

    box.addEventListener('mousemove', event => {
        let position = event.offsetX / (event.target.clientWidth - 1);
        position = Math.floor(position * 100);
        document.querySelector('#result').textContent = position + '%';
    });

    box.addEventListener('mouseout', event => document.querySelector('#result').textContent = '');
}