'use strict';

/**
 * es-new service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::es-new.es-new');
