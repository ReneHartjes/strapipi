'use strict';

/**
 * configurator router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::configurator.configurator');
