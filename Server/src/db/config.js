import mongoose from "mongoose";

const MONGODBURI= process.env.MONGODBURI ||"mongodb://localhost:27017/Guardian";
const connect = async () => {
  try {
    // Connect to MongoDB using mongoose
    await mongoose.connect(MONGODBURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    
    console.log('Connected to MongoDB');

    // If you want to interact with the database directly (not typical in Mongoose)
    const db = mongoose.connection.db; // Access the native MongoDB client
    const collection = db.collection('mycollection');

    // You can now use `collection` to interact with the database
    // Example: const documents = await collection.find({}).toArray();
  } catch (error) {
    console.error('Failed to connect to MongoDB', error);
  }
};

export default connect;
