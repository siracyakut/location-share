import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
  updatePassword,
  updateEmail,
  GoogleAuthProvider,
} from "firebase/auth";
import app from "~/firebase";
import { destroyUser, setUser } from "~/store/auth/actions";
import { closeModal } from "~/store/modal/actions";
import toast from "react-hot-toast";
import { getFirebaseError } from "~/utils/firebase-errors";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

onAuthStateChanged(auth, (user) => {
  if (user) {
    setUser(JSON.stringify(user));
  } else {
    destroyUser();
  }
});

export const firebaseRegister = async (username, email, password) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    await firebaseUpdate(username);
    auth.currentUser.displayName = username;
    setUser(JSON.stringify(auth.currentUser));
    closeModal();
    toast.success("Başarıyla kayıt oldunuz!");
    return true;
  } catch (e) {
    toast.error(getFirebaseError(e.code));
    return false;
  }
};

export const firebaseLogin = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    closeModal();
    toast.success("Başarıyla giriş yaptınız!");
    return true;
  } catch (e) {
    toast.error(getFirebaseError(e.code));
    return false;
  }
};

export const firebaseGoogleLogin = async () => {
  try {
    await signInWithPopup(auth, provider);
    closeModal();
    toast.success("Başarıyla giriş yaptınız!");
    return true;
  } catch (e) {
    toast.error(getFirebaseError(e.code));
    return false;
  }
};

export const firebaseLogout = async () => {
  try {
    await signOut(auth);
    toast.success("Başarıyla çıkış yaptınız.");
    return true;
  } catch (e) {
    toast.error(getFirebaseError(e.code));
    return false;
  }
};

export const firebaseUpdate = async (data) => {
  try {
    await updateProfile(auth.currentUser, data);
    setUser(JSON.stringify(auth.currentUser));
    return true;
  } catch (e) {
    toast.error(getFirebaseError(e.code));
    return false;
  }
};

export const firebaseUpdatePassword = async (newPassword) => {
  try {
    await updatePassword(auth.currentUser, newPassword);
    return true;
  } catch (e) {
    toast.error(getFirebaseError(e.code));
    return false;
  }
};

export const firebaseUpdateMail = async (newMail) => {
  try {
    await updateEmail(auth.currentUser, newMail);
    return true;
  } catch (e) {
    toast.error(getFirebaseError(e.code));
    return false;
  }
};
