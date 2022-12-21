'use strict';

/**
 * fr-system service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::fr-system.fr-system');
