import express from "express"
import dotenv from "dotenv"
dotenv.config()
import bodyParser from "body-parser"
import userRoutes from "./ROUTES/user.routes.js"
import candidateRoutes from "./ROUTES/candidates.routes.js"
import connectDB from "./databaseConnection.js"

const app = express();
app.use(express.json());
app.use(bodyParser.json());

const PORT =  3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

//  CONNECT TO DB
connectDB()

// Use the routers
app.use('/api/v1/user', userRoutes);
app.use('/api/v1/candidate', candidateRoutes);