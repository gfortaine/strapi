'use strict';

/**
 * Lifecycle callbacks for the `Role` model.
 */

module.exports = {
  collectionName: 'strapi_roles',
  info: {
    name: 'Role',
    description: '',
  },
  options: {
    timestamps: true,
  },
  pluginOptions: {
    'content-manager': {
      visible: false,
    },
    'content-type-builder': {
      visible: false,
    },
  },
  attributes: {
    name: {
      type: 'string',
      minLength: 1,
      unique: true,
      configurable: false,
      required: true,
    },
    code: {
      type: 'string',
      minLength: 1,
      unique: true,
      configurable: false,
      required: true,
    },
    description: {
      type: 'string',
      configurable: false,
    },
    users: {
      configurable: false,
      collection: 'user',
      via: 'roles',
      plugin: 'admin',
    },
    permissions: {
      configurable: false,
      plugin: 'admin',
      collection: 'permission',
      via: 'role',
    },
  },
};
