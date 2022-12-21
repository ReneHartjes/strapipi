'use strict';

/**
 * es-system controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::es-system.es-system');
