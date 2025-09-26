import mongoose from "mongoose";

export const dbConnection = async () => {
  try {
    // MongoDB Atlas connection configuration
    const mongoUri = process.env.MONGO_URI;
    
    if (!mongoUri) {
      throw new Error("MONGO_URI is not defined in environment variables");
    }
    
    await mongoose.connect(mongoUri, {
      dbName: "CommunityCrew_Project",
      // Connection pool settings for Atlas
      maxPoolSize: 10, // Maintain up to 10 socket connections
      serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
      socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    });
    
    console.log("✅ Connected to MongoDB Atlas successfully!");
    console.log(`📊 Database: CommunityCrew_Project`);
    console.log(`🌐 Host: ${mongoose.connection.host}`);
    
    return true;
  } catch (error) {
    console.error("❌ Error connecting to MongoDB Atlas:", error.message);
    console.log("💡 Make sure to update your MONGO_URI in the .env file with your Atlas connection string");
    return false;
  }
};
