'use strict';

/**
 * es-text service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::es-text.es-text');
