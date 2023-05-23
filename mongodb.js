const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    const uri = process.env.MONGO_URI || "mongodb+srv://ranaslait:4setDtjtBFb549Nx@cluster0.a3ua0nj.mongodb.net/";
    await mongoose
      .connect(uri, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
      })
      .catch((error) => console.log(error));
    const connection = mongoose.connection;
    console.log("MONGODB CONNECTED SUCCESSFULLY!");
  } catch (error) {
    console.log(error);
    return error;
  }
};
module.exports = connectDB;