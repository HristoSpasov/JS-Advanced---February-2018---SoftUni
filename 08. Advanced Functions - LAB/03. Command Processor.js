function processCommands(arrOfCommands) {
    let textModify = (function() {
        let text = '';

        return function(input){
            let tokens = input.split(' ');

            switch (tokens[0]){
                case 'append': text += tokens[1]; break;
                case 'removeStart': text = text.substring(Number(tokens[1])); break;
                case 'removeEnd': text = text.substring(0, text.length - Number(tokens[1])); break;
                case 'print': console.log(text); break;
            }
        }
    })();

    for (let cmd of arrOfCommands) {
        textModify(cmd);
    }
}

processCommands([
    'append hello',
    'append again',
    'removeStart 3',
    'removeEnd 4',
    'print'
    ]
);
