import express from "express";
import cors from "cors";


import dotenv from "dotenv";
import routes from "./src/routes/cproutes"
import morgan from "morgan"
import path from "path";
import { recordVisitor } from "./src/controllers/visitorTracker";

const frontendPath = path.join(__dirname, "../../frontend/dist");


dotenv.config();

const app = express();

app.set("trust proxy", true);
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(routes)
app.use(async (req, res, next) => {
  if (req.method !== "GET" || !req.accepts("html")) {
    next();
    return;
  }
   await recordVisitor(req);

  next();
});
app.use(express.static(frontendPath));


app.use((req, res) => {
  res.sendFile(path.join(frontendPath, "index.html"));
});


const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
