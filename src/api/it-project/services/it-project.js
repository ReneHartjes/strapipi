'use strict';

/**
 * it-project service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::it-project.it-project');
