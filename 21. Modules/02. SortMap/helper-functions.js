function mapSort(map, sortFn) {
    if (sortFn === undefined) {
        sortFn = function (a, b) {
            return a[0].toString().localeCompare(b[0].toString());
        }
    }

    let sortedMap = new Map();
    [...map].sort(sortFn).forEach(e => sortedMap.set(e[0], map.get(e[0])));

    return sortedMap;
}

module.exports = mapSort;