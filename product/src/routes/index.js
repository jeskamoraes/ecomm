const bodyParser = require('body-parser')
const product = require('./productsRoute')
const image = require('./imagesRoute')
const feature = require('./featuresRoute')

module.exports = app => {
    app.use(
        bodyParser.json(),
        bodyParser.urlencoded({ extended: false }),
        product,
        image,
        feature
    )
}