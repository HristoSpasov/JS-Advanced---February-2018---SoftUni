function extensibleObject() {
    function extend(template) {
        for (let prop of Object.keys(template)) {
            if (typeof(template[prop]) === "function") {
                Object.getPrototypeOf(this)[prop] = template[prop];
            } else {
                this[prop] = template[prop];
            }
        }
    }

    return {extend};
}

console.log(extensibleObject());