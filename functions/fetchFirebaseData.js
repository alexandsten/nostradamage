const admin = require("firebase-admin");
const { initializeApp } = require('firebase-admin/app');
const { getDatabase, ref, get, goOffline, goOnline } = require('firebase-admin/database');

// Initialize Firebase Admin SDK with service account (can use env vars for sensitive info)
if (!admin.apps.length) {
  initializeApp({
    credential: admin.credential.cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    }),
    databaseURL: process.env.FIREBASE_DATABASE_URL,
  });
}

exports.handler = async (event) => {
  try {
    const { eventName } = JSON.parse(event.body); // Extract event name from frontend request

    const db = getDatabase();
    goOnline(db); // Go online and connect to Firebase Realtime Database

    const snapshot = await get(ref(db, eventName)); // Query the Firebase DB
    const fighterData = snapshot.val();

    goOffline(db); // Go offline to avoid leaving the connection open
    
    if (fighterData) {
      return {
        statusCode: 200,
        body: JSON.stringify(fighterData),
      };
    } else {
      return {
        statusCode: 404,
        body: JSON.stringify({ message: "Data not found" }),
      };
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Errorrrrr fetching data", error: error.message }),
    };
  }
};
