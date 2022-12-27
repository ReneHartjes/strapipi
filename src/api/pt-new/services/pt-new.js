'use strict';

/**
 * pt-new service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::pt-new.pt-new');
