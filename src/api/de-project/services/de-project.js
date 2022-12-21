'use strict';

/**
 * de-project service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::de-project.de-project');
