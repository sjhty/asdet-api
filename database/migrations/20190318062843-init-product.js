'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */

    const {INTEGER, STRING, DATE} = Sequelize;

    await queryInterface.createTable('product', {
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
  },

  down: async (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */

    await queryInterface.dropTable('product');
  }
};
