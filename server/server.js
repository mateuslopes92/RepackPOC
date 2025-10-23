// server.js
import express from "express";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

const distPath = path.join(__dirname, "../dist");
app.use(express.static(distPath));

app.get("/", (req, res) => {
  res.send("Chunk server running 🚀");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`✅ Server ready at http://localhost:${PORT}`);
  console.log(`📦 Serving static files from: ${distPath}`);
});