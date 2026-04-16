// 1. Import your Admin SDK config to access Firestore
const admin = require("../config/firebase");
const db = admin.firestore();

const createUserProfile = async (req, res) => {
  try {
    // req.user comes from your verifyFirebaseToken middleware
    const { uid, email } = req.user;

    // 1. Extract firstName and lastName instead of a single 'name'
    const { firstName, lastName, username } = req.body;

    // 2. Validate that they at least provided a first name
    if (!firstName) {
      return res
        .status(400)
        .json({ error: "First name is required to build a profile." });
    }

    const userRef = db.collection("users").doc(uid);

    // 3. Save the split data to Firestore
    await userRef.set(
      {
        firstName: firstName,
        lastName: lastName || "",
        username: username || "",
        email: email,
        updatedAt: admin.firestore.FieldValue.serverTimestamp(),
      },
      { merge: true },
    );

    return res.status(200).json({
      message: "Profile successfully saved!",
      uid: uid,
    });
  } catch (error) {
    console.error("Error saving user profile:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  createUserProfile,
};
