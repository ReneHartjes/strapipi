'use strict';

/**
 * no-document service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::no-document.no-document');
