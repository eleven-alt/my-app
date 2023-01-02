import { initializeApp } from 'firebase/app';
import { getAuth , signInWithRedirect , signInWithPopup , GoogleAuthProvider } from 'firebase/auth';
import { 
    getFirestore,
    doc,
    getDoc,
    setDoc,

} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA-oJ5G_2w4IpUHbHvb6MoG9PMiQmFFxVk",
    authDomain: "my-app-db-dcb22.firebaseapp.com",
    projectId: "my-app-db-dcb22",
    storageBucket: "my-app-db-dcb22.appspot.com",
    messagingSenderId: "714372090869",
    appId: "1:714372090869:web:e470165a92b3d0c9246ebc"
  };

  const firebaseApp = initializeApp(firebaseConfig); 

  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt: "select_account"
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

 export const db = getFirestore();

 export const createUserDocumentFromAuth = async (userAuth) => {
      const userDocRef = doc(db, 'users', userAuth.uid);
      
      

      const userSnapshot = await getDoc(userDocRef);
      

      if(!userSnapshot.exists()){
        const {displayName, email } = userAuth;
        const createdAt = new Date();
        try{
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
            })

        } catch (error){
            console.log('error creating the user', error.message);
        }
       
      }

      return userDocRef;
 };
