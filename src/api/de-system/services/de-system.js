'use strict';

/**
 * de-system service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::de-system.de-system');
