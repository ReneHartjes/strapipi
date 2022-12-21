'use strict';

/**
 * it-system service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::it-system.it-system');
