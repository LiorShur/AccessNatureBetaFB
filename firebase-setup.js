// firebase-setup.js
import { initializeApp, getApps } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-storage.js";

// ✅ Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAmsm916Lzp0MUXANq3SECO4ec7q1H0Vu4",
  authDomain: "accessnaturebeta-821a2.firebaseapp.com",
  projectId: "accessnaturebeta-821a2",
  storageBucket: "accessnaturebeta-821a2.appspot.com",
  messagingSenderId: "670888101781",
  appId: "1:670888101781:web:b4cf57f58e86182466589c"
};

// ✅ Initialize only once
const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);

// ✅ Export modules
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
