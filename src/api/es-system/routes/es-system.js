'use strict';

/**
 * es-system router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::es-system.es-system');
