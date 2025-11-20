import express from "express";
import cors from "cors";
import records from "./routes/record.js";

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors({
  origin: [
    "http://98.92.143.94:3000",   // frontend running on 3000
    "http://localhost:3000"      // for local development
  ],
  credentials: true
}));
app.use(express.json());
app.use("/record", records);

// start the Express server
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server listening on port ${PORT}`);
});

