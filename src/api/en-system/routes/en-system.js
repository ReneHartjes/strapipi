'use strict';

/**
 * en-system router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::en-system.en-system');
