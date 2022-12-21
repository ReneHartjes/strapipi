'use strict';

/**
 * es-project service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::es-project.es-project');
