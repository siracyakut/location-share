import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
  GoogleAuthProvider,
} from "firebase/auth";
import app from "~/firebase";
import { destroyUser, setUser } from "~/store/auth/actions";
import { destroyModal } from "~/store/modal/actions";
import toast from "react-hot-toast";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log(user);
    setUser(JSON.stringify(user));
  } else {
    destroyUser();
  }
});

export const firebaseRegister = async (username, email, password) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    await firebaseUpdate(username);
    setUser(JSON.stringify(auth.currentUser));
    destroyModal();
    toast.success("Başarıyla kayıt oldunuz!");
    return true;
  } catch (e) {
    toast.error(e.message);
    return false;
  }
};

export const firebaseLogin = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    destroyModal();
    toast.success("Başarıyla giriş yaptınız!");
    return true;
  } catch (e) {
    toast.error(e.message);
    return false;
  }
};

export const firebaseGoogleLogin = async () => {
  try {
    await signInWithPopup(auth, provider);
    destroyModal();
    return true;
  } catch (e) {
    toast.error(e.message);
    return false;
  }
};

export const firebaseLogout = async () => {
  try {
    await signOut(auth);
    return true;
  } catch (e) {
    toast.error(e.message);
    return false;
  }
};

export const firebaseUpdate = async (username) => {
  try {
    await updateProfile(auth.currentUser, { displayName: username });
    return true;
  } catch (e) {
    toast.error(e.message);
    return false;
  }
};
