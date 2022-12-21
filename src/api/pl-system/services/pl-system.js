'use strict';

/**
 * pl-system service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::pl-system.pl-system');
