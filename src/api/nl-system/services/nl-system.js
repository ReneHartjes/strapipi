'use strict';

/**
 * nl-system service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::nl-system.nl-system');
