let data = require('./input');

function sort(property) {
    return data.sort((a, b) => a[property].toString().localeCompare(b[property].toString()));
}

function filter(property, value) {
    return data.filter(e => e[property] === value);
}

result.sort = sort;
result.filter = filter;