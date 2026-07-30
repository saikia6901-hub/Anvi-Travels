import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyCy5M42kuuyOrhXA7hLglchYrgqEj4KNTQ",
  authDomain: "anvi-travels-78c33.firebaseapp.com",
  projectId: "anvi-travels-78c33",
  storageBucket: "anvi-travels-78c33.firebasestorage.app",
  messagingSenderId: "954247687836",
  appId: "1:954247687836:web:b778008d73275646a80759",
  measurementId: "G-H9VMQK95V4"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app };
