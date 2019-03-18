'use strict'

module.exports = app => {
    const {INTEGER, STRING, DATE} = app.Sequelize;

    const Product = app.model.difine('product', {
        id: {type: INTEGER, primaryKey: true, autoIncrement: true},
        category_id: INTEGER,
        title: STRING(500),
        subTitle: STRING(500),
        imgUrl: STRING(300),
        size: STRING(200),
        stock: INTEGER,
        supplier: STRING(200),
        createTime: DATE,
        modifyTime: DATE
    })

    return Product;
}