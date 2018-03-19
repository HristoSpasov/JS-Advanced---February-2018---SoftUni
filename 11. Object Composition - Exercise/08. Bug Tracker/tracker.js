function generateFunctionality() {
    return (() => {
        let bugStore = [];
        let id = 0;
        let selector;

        function report(author, description, reproducible, severity) {
            let newBug = {
                ID: id++,
                author: author,
                description: description,
                reproducible: reproducible,
                severity: severity,
                status: 'Open'
            };

            bugStore.push(newBug);
            sort();
        }

        function setStatus(id, newStatus) {
            bugStore.filter(e => e.ID === id)[0].status = newStatus;
            sort();
        }

        function remove(id) {
            let indexToRemove = bugStore.indexOf(bugStore.filter(e => e.ID === id)[0]);
            bugStore.splice(indexToRemove, 1);
            sort();
        }

        function sort(method = 'ID') {
            switch (method){
                case 'author': bugStore.sort((a, b) => a.author.localeCompare(b.author)); break;
                case 'severity': bugStore.sort((a, b) => a.severity - b.severity); break;
                case 'ID': bugStore.sort((a, b) => a.ID - b.ID); break;
            }

            selector ? htmlGenerator() : undefined;
        }

        function output(newSelector){
            selector = newSelector;
        }

        function htmlGenerator(){
            $(selector).html('');

            for (let bug of bugStore) {
                $(selector).append($(`<div id="report_${bug.ID}" class="report"><div class="body"><p>${bug.description}</p></div><div class="title"><span class="author">Submitted by: ${bug.author}</span><span class="status">${bug.status} | ${bug.severity}</span></div></div>`));
            }
        }

        return {report, setStatus, remove, sort, output}
    })();
}