import { initializeApp } from "firebase/app";
import firebaseConfig from "./FirebaseConfig";


const FirebaseInit = () => {
    initializeApp(firebaseConfig)
}

export default FirebaseInit
