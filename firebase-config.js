<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.17.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.17.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCy5M42kuuyOrhXA7hLglchYrgqEj4KNTQ",
    authDomain: "anvi-travels-78c33.firebaseapp.com",
    databaseURL: "https://anvi-travels-78c33-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "anvi-travels-78c33",
    storageBucket: "anvi-travels-78c33.firebasestorage.app",
    messagingSenderId: "954247687836",
    appId: "1:954247687836:web:b778008d73275646a80759",
    measurementId: "G-H9VMQK95V4"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>
