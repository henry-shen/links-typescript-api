import express from 'express';
import morgan from "morgan";
import apiRouter from "./api/routes";
import cors from './middleware/cors'
import errorHandler from "./middleware/errorHandler";

const app = express();
const PORT = 8000;

app.use(cors)
app.use(express.json())
app.use(morgan("tiny"))
app.use(express.static("public"))

app.get('/', (req, res) => res.send('Express + TypeScript Server'))

app.use(apiRouter)

app.use(errorHandler)

app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});