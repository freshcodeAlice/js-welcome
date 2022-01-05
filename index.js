const PROTOCOL = 'http://';
const SERVER_IP = 'www.google.com';
const PORT = '80';

function createQuery(absPath) {

    const url = `${PROTOCOL}${SERVER_IP}:${PORT}${absPath}`;
    return url
}
