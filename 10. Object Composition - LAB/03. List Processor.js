function listProcessor(strArr) {
    let processingOperations = (function () {
        let list = [];

        function add(strToAdd) {
            list.push(strToAdd);
        }

        function remove(strToRemove) {
            list = list.filter(str => str !== strToRemove);
        }

        function print() {
            return list.toString();
        }

        return {add, remove, print};
    })();

    for (let cmd of strArr) {
        let [command, argument] = cmd.split(' ');
        let result = processingOperations[command](argument);
        if (result !== undefined) {
            console.log(result);
        }
    }
}

listProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print']);