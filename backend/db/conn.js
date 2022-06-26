const mongoose = require('mongoose')

async function main() {
    await mongoose.connect('mongodb://0.0.0.0:27017/SOPA')
    console.log('Conectamos ao Mongoose!')
}
main().catch((err) => console.log(err))

module.exports = mongoose