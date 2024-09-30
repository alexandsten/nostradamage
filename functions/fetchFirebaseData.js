const admin = require("firebase-admin");
const { initializeApp } = require('firebase-admin/app');
const { getDatabase, ref, get } = require('firebase-admin/database');

// Initialize Firebase Admin SDK
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

// Function to fetch fighter data
exports.handler = async (event) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
  };

  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: '',
    };
  }

  try {
    const { eventName } = JSON.parse(event.body);
    const db = getDatabase();
    const snapshot = await get(ref(db, eventName));
    const fighterData = snapshot.val();

    if (fighterData) {
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify(fighterData),
      };
    } else {
      return {
        statusCode: 404,
        headers,
        body: JSON.stringify({ message: "Data not found" }),
      };
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ message: "Error fetching data", error: error.message }),
    };
  }
};
