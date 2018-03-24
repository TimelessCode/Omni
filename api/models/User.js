/**
 * User.js
 *
 * @description :: The model representing the user, contains points and the name of the user
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    points: {
      type: 'integer',
      defaultsTo: 0,
    }
,
    name: {
      type: 'string',
      defaultsTo: ' '
    }
  }
};