'use strict';

/**
 * configurator controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::configurator.configurator');
