'use strict'

const Controller = require('egg').Controller;

function toInt(str) {
  if (typeof str === 'number') return str;
  if (!str) return str;
  return parseInt(str, 10) || 0;
}

class ProductController extends Controller {
    async index() {
        const ctx = this.ctx;
        const query = { limit: toInt(ctx.query.limit), offset: toInt(ctx.query.offset)};
        ctx.body = await ctx.model.Product.findAll(query);
    }

    async show() {
        const ctx = this.ctx;
        ctx.body = await ctx.model.Product.findById(ctx.params.id)
    }

    async create() {
        const ctx = this.ctx;
        const { category_id, title, subTitle, imgUrl, size, stock, supplier, createTime, modifyTime } = ctx.request.body;
        const product = await ctx.model.Product.create({ category_id, title, subTitle, imgUrl, size, stock, supplier, createTime, modifyTime });
        ctx.status = 201;
        ctx.body = product;
    }
}

module.exports = ProductController