'use strict';

/**
 * configurator service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::configurator.configurator');
