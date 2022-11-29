require("dotenv").config();
const { MongoClient } = require("mongodb");
const connectionString = process.env.MONGO_URI;

module.exports = {
  create: async (options) => {
    const client = new MongoClient(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    try {
      await client.connect();
      const database = client.db("users");
      const collection = database.collection("users");
      const result = await collection.insertOne(options.user);
      return result;
    } catch (err) {
      return err;
    } finally {
      await client.close();
    }
  },

  get: async (options) => {
    const client = new MongoClient(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    try {
      await client.connect();
      const database = client.db("users");
      const collection = database.collection("users");
      // TODO refactor to find
      const result = await collection.findOne(options.user);
      return result;
    } catch (err) {
      return;
    } finally {
      await client.close();
    }
  },
};
