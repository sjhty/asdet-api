'use strict'
const { factroy } = require('factory-girl')

module.exports = app => {
    app.factroy = factory;

    factory.define('product',app.model.Product, {
        
    })
}
