'use strict';

module.exports = {
  env: process.env.NODE_ENV || 'development',
  debug: process.env.NODE_ENV !== 'production',
  app: {
    name: process.env.APP_NAME || 'Dagger Webhooks',
    port: parseInt(process.env.APP_PORT || 3000, 10)
  }
};