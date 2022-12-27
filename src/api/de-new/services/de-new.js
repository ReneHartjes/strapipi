'use strict';

/**
 * de-new service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::de-new.de-new');
