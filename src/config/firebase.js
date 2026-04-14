const admin = require("firebase-admin");

// 1. Import your private key
// Because this file is in src/config, we use '../../' to go up two folders to the root
const serviceAccount = require("../../serviceAccountKey.json");

// 2. Initialize the Admin SDK
// This checks if it's already initialized to prevent crash loops when using nodemon
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

// 3. Export the initialized admin object so your middleware and routes can use it
module.exports = admin;
