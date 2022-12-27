'use strict';

/**
 * es-product service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::es-product.es-product');
