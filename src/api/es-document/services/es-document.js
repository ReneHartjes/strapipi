'use strict';

/**
 * es-document service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::es-document.es-document');
