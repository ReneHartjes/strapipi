'use strict';

/**
 * pl-new service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::pl-new.pl-new');
