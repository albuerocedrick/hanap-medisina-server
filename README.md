<div align="center">

# 🌿 HanapMedisina API Server
**The secure Node.js & Express backend for the HanapDamo Mobile App.**

[![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](#)
[![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)](#)
[![Firebase](https://img.shields.io/badge/Firebase-039BE5?style=for-the-badge&logo=Firebase&logoColor=white)](#)
[![REST API](https://img.shields.io/badge/REST_API-005571?style=for-the-badge&logo=databricks&logoColor=white)](#)

</div>

> **System Role:** In the HanapDamo three-tier architecture, this Express server acts as the secure gatekeeper. While the mobile app reads data directly from Firebase for speed, all database writes (e.g., saving offline scan histories) are routed through this API. It uses the Firebase Admin SDK to verify user identity tokens before allowing any data to hit Firestore.

---

## 📑 Table of Contents
1. [Tech Stack](#-tech-stack)
2. [Prerequisites](#-prerequisites)
3. [Environment Setup & Secrets](#-environment-setup--secrets)
4. [Installation & Running](#-installation--running)
5. [API Routes Overview](#-api-routes-overview)
6. [Connecting to the Mobile App](#-connecting-to-the-mobile-app)

---

## 🏗 Tech Stack
* **Runtime:** Node.js
* **Framework:** Express.js
* **Authentication/Security:** Firebase Admin SDK (ID Token Verification)
* **Database:** Cloud Firestore

---

## 🚀 Prerequisites

Before cloning this repository, ensure you have:
1. **[Node.js](https://nodejs.org/)** (v18 or higher)
2. **Firebase Project Setup:** A Firebase project with Firestore and Authentication enabled.

---

## 🔒 Environment Setup & Secrets

To run this server, you must securely connect it to your Firebase project. **Never commit these files to GitHub.**

**1. The `.env` File**
Create a `.env` file in the root directory and add your port configuration:
```env
PORT=3000
# Add any future secret keys here
```

**2. The Firebase Admin Key**
This server requires a Service Account Key to bypass standard Firebase security rules safely.
1. Go to your Firebase Console > **Project Settings** > **Service Accounts**.
2. Click **Generate new private key** and download the JSON file.
3. Rename the downloaded file to `serviceAccountKey.json`.
4. Place `serviceAccountKey.json` in the root directory of this project.

⚠️ **CRITICAL SECURITY WARNING:** Ensure that both `.env` and `serviceAccountKey.json` are listed in your `.gitignore` file before pushing any code.

---

## 🛠 Installation & Running

**1. Clone the repository and install dependencies:**
```bash
git clone [https://github.com/YOUR_USERNAME/hanap-medisina-server.git](https://github.com/YOUR_USERNAME/hanap-medisina-server.git)
cd hanap-medisina-server
npm install
```

**2. Start the Server:**
*For standard execution:*
```bash
npm start
```
*For development (auto-restarts when you save files):*
```bash
npm run dev
```

---

## 🗺 API Routes Overview

<details open>
<summary><b>Click to view planned endpoints</b></summary>
<br>

All write requests require a valid Firebase ID Token passed in the `Authorization: Bearer <token>` header.

### 🌿 Scans & History (Sample ONly)
* `POST /api/scan/sync` - Receives an array of offline scans from the mobile app, validates the user token, and writes the batch to Firestore.

</details>

---

## 🔌 Connecting to the Mobile App

If you are running this server locally (e.g., at `http://localhost:3000`) and testing the mobile app on a physical Android device via USB, your phone cannot reach "localhost" over the network.

You must reverse-proxy the port using ADB so the phone bridges to your laptop's server. Open a separate terminal and run:

```bash
adb reverse tcp:3000 tcp:3000
```
*You must run this command every time you unplug and replug your phone.*

---
<div align="center">
  <i>Developed for HanapDamo Mobile</i>
</div>
