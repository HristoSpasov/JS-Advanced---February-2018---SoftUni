function validateRequest(obj) {
    const validMethods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    const urlPattern = /^[A-Za-z0-9.]+$/;
    const validVersions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0',];
    const messagePattern = /^[^<>\\&'"]*$/;

    let method = obj.method;
    let uri = obj.uri;
    let version = obj.version;
    let message = obj.message;

    if(method === undefined) throw Error('Invalid request header: Invalid Method');
    if(uri === undefined) throw Error('Invalid request header: Invalid URI');
    if(version === undefined) throw Error('Invalid request header: Invalid Version');
    if(message === undefined) throw Error('Invalid request header: Invalid Message');

    if(!validMethods.includes(method)) throw Error('Invalid request header: Invalid Method');
    if(!urlPattern.exec(uri) && uri !== '*')  throw Error('Invalid request header: Invalid URI');
    if(!validVersions.includes(version)) throw Error('Invalid request header: Invalid Version');
    if(!messagePattern.exec(message)) throw Error('Invalid request header: Invalid Message');

    return obj;
}

let obj = {
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
};

let obj1 = {
    method: 'OPTIONS',
    uri: 'git.master',
    version: 'HTTP/1.1',
    message: '-recursive'
};

console.log(validateRequest(obj));
console.log(validateRequest(obj1));
