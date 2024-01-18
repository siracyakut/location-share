import { getFirestore } from "firebase/firestore";
import {
  collection,
  addDoc,
  onSnapshot,
  deleteDoc,
  updateDoc,
  doc,
} from "firebase/firestore";
import app from "~/firebase";
import { setMarkers } from "~/store/markers/actions";
import toast from "react-hot-toast";
import { getFirebaseError } from "~/utils/firebase-errors";

const db = getFirestore(app);

export const addMarkerToFirebase = async (data) => {
  try {
    await addDoc(collection(db, "markers"), data);
    return true;
  } catch (e) {
    toast.error(getFirebaseError(e.code));
    return false;
  }
};

export const deleteMarkerFirebase = async (id) => {
  try {
    // const q = query(collection(db, "markers"), where("uid", "==", uid));
    // const snapshots = await getDocs(q);
    // snapshots.forEach((d) => deleteDoc(doc(db, "markers", d.id)));
    await deleteDoc(doc(db, "markers", id));
    return true;
  } catch (e) {
    toast.error(getFirebaseError(e.code));
    return false;
  }
};

export const updateMarkerFirebase = async (id, data) => {
  try {
    await updateDoc(doc(db, "markers", id), data);
    return true;
  } catch (e) {
    return false;
  }
};

onSnapshot(collection(db, "markers"), (doc) => {
  const data = doc.docs.reduce(
    (markers, marker) => [...markers, { ...marker.data(), id: marker.id }],
    [],
  );
  setMarkers(data);
});
