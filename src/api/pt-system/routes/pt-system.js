'use strict';

/**
 * pt-system router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::pt-system.pt-system');
