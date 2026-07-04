import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import routes from "./src/routes/cproutes"
import morgan from "morgan"

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(routes)


app.get("/", (req, res) => {
  res.send("Backend is running ");
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});