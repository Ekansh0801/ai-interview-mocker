/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://neondb_owner:60EmMuqoZgBk@ep-withered-dream-a5wrqoev.us-east-2.aws.neon.tech/ai-interview-mocker?sslmode=require',
    }
  };