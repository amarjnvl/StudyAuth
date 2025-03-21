const mongoose = require("mongoose");
require("dotenv").config(); // Load environment variables

exports.connect = async () => {
  try {
    const dbURI = process.env.DATABASE_URL;
    if (!dbURI) {
      throw new Error("DATABASE_URL is not defined. Check your .env file!");
    }

    await mongoose.connect(dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("✅ Database connected successfully!");
  } catch (error) {
    console.error("❌ DB Connection Failed:", error.message);
    process.exit(1);
  }
};
