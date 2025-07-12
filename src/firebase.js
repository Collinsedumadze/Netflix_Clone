// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyA2gdNYCmkMEYv19yCKCM3rr6yrStDypqw",
  authDomain: "netflix-clone-4c93f.firebaseapp.com",
  projectId: "netflix-clone-4c93f",
  storageBucket: "netflix-clone-4c93f.firebasestorage.app",
  messagingSenderId: "795043644128",
  appId: "1:795043644128:web:f2c1e279e8e3c3a9b38685"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);

        const user = res.user;
        await addDoc(collection(db, "users"), {
            uid: user.uid,
            name,
            authProvider: "local",
            email
        })
    }catch (error){
        console.error("Error signing up:", error.message);
        alert(error);
    }
}
const login = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (error){
        console.error("Error signing up:", error);
        alert(error);
    }
}

const logout = () => {
    signOut(auth);
}

export { auth, db, signup, login, logout };