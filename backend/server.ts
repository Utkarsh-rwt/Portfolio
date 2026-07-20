import express from "express";

import dotenv from "dotenv";
import routes from "./src/routes/cproutes"
import morgan from "morgan"
import path from "path";

const frontendPath = path.join(__dirname, "../../frontend/dist");


dotenv.config();

const app = express();


app.use(express.json());
app.use(morgan("dev"));
app.use(routes)
app.use(express.static(frontendPath));


app.use((req, res) => {
  res.sendFile(path.join(frontendPath, "index.html"));
});


const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});