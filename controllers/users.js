const users = require("../models/users");

module.exports = {
  get: async (options) => {
    result = await users.get(options);
    return result;
  },

  create: async (options) => {
    result = await users.create(options);
    return result;
  },
};
