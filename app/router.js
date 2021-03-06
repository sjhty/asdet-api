'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.resources('topics','api/v2/topics',controller.topics)
  router.resources('product','/product',controller.product)
};
