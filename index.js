require("dotenv").config();
const express = require("express");
const admin = require("firebase-admin");
const cors = require("cors");
const serviceAccount = require("./serviceAccountKey.json");

const app = express();
app.use(cors());
app.use(express.json());

// Initialize Firebase Admin
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

app.get("/", (req, res) => res.send("Hanap Medicina API is Live!"));

app.get("/api/ping", (req, res) => {
  console.log("Ping received from mobile app!");
  res.json({
    success: true,
    message: "Pong! The server is alive.",
    timestamp: new Date().toISOString(),
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, "0.0.0.0", () => console.log(`Server running ${PORT}`));
