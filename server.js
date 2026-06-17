const app = require('./src/app');
const connectDB = require('./src/configs/db');

// Connect to MongoDB
connectDB();

app.listen(3000, () =>{
  console.log(`server is running on http://localhost:3000`)
})