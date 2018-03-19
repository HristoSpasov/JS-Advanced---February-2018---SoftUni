function attachEventsListeners() {
    let convertBtn = document.querySelector('#convert');
    convertBtn.addEventListener('click', calculate);

    function calculate() {
        // Read and parse input
        let inputDist = document.querySelector('#inputDistance').value;
        if (isNaN(inputDist)) return;
        inputDist = Number(inputDist);

        let fromUnit = document.querySelector('#inputUnits').value;
        let toUnit = document.querySelector('#outputUnits').value;

        // Update result
        document.querySelector('#outputDistance').value = convert();

        function convert() {
            // Convert input to meters
            switch (fromUnit){
                case 'km' : inputDist *= 1000; break;
                case 'cm' : inputDist *= 0.01; break;
                case 'mm' : inputDist *= 0.001; break;
                case 'mi' : inputDist *= 1609.34; break;
                case 'yrd' : inputDist *= 0.9144; break;
                case 'ft' : inputDist *= 0.3048; break;
                case 'in' : inputDist *= 0.0254; break;
            }

            // Convert from meters to target metrics
            let converted;
            switch (toUnit){
                case 'km' : converted = inputDist / 1000; break;
                case 'm' : converted = inputDist; break;
                case 'cm' : converted = inputDist / 0.01; break;
                case 'mm' : converted = inputDist / 0.001; break;
                case 'mi' : converted = inputDist / 1609.34; break;
                case 'yrd' : converted = inputDist / 0.9144; break;
                case 'ft' : converted = inputDist / 0.3048; break;
                case 'in' : converted = inputDist / 0.0254; break;
            }

            return converted;
        }
    }
}

/*
1 km = 1000 m
1 m = 1 m
1 cm = 0.01 m
1 mm = 0.001 m
1 mi = 1609.34 m
1 yrd = 0.9144 m
1 ft = 0.3048 m
1 in = 0.0254 m
*/