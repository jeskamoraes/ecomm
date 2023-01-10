const bodyParser = require('body-parser')
const product = require('./productsRoute')
const image = require('./imagesRoute')

module.exports = app => {
    app.use(
        bodyParser.json(),
        bodyParser.urlencoded({ extended: false }),
        product,
        image
    )
}