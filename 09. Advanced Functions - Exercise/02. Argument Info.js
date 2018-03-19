function result(){
    let typesMapCount = new Map();

    for (let arg of arguments) {
        let type = typeof(arg);
        console.log(`${type}: ${arg}`);

        if (!typesMapCount.has(type)){
            typesMapCount.set(type, 0);
        }

        typesMapCount.set(type, typesMapCount.get(type) + 1);
    }

    for (let t of [...typesMapCount].sort((a, b) => b[1] - a[1])) {
        console.log(`${t[0]} = ${t[1]}`);
    }
}

result('cat', 42, function () { console.log('Hello world!'); });
