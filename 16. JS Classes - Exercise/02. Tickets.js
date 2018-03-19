function ticketManager(arrOfStrings, sortingCriteria) {
    let store = [];

    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = Number(Number(price).toString());
            this.status = status;
        }
    }

    arrOfStrings.forEach(e => {
        let [destinationName, price, status] = e.split('|');
        store.push(new Ticket(destinationName, price, status))
    });


    return store.sort((a, b) => {
        if(sortingCriteria !== 'price'){
            return a[sortingCriteria].localeCompare(b[sortingCriteria]);
        }

        return a[sortingCriteria] - b[sortingCriteria];
    });
}

console.log(ticketManager([
        'Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'destination'
));

console.log(ticketManager(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'status'
));

console.log(ticketManager(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'price'));