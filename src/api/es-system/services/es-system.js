'use strict';

/**
 * es-system service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::es-system.es-system');
