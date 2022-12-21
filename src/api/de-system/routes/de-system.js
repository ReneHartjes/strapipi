'use strict';

/**
 * de-system router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::de-system.de-system');
