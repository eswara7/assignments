const jwt = require('jsonwebtoken');
const jwtPassword = "secret";

function signJwt(username, password) {
    jwt.signin()

}

function verifyJwt(token) {

}

function decodeJwt(token) {

}

module.exports = {
    signJwt,
    verifyJwt,
    decodeJwt,
    jwtPassword
}