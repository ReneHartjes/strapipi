'use strict';

/**
 * en-system service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::en-system.en-system');
