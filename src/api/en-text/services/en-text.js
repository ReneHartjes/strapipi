'use strict';

/**
 * en-text service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::en-text.en-text');
