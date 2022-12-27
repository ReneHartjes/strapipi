'use strict';

/**
 * it-new service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::it-new.it-new');
