'use strict';

/**
 * nl-new service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::nl-new.nl-new');
