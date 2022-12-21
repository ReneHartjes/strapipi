'use strict';

/**
 * pt-system service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::pt-system.pt-system');
