'use strict';

/**
 * it-product service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::it-product.it-product');
