import { getFirestore } from "firebase/firestore";
import {
  collection,
  addDoc,
  onSnapshot,
  deleteDoc,
  query,
  getDocs,
  where,
  doc,
} from "firebase/firestore";
import app from "~/firebase";
import { setMarkers } from "~/store/markers/actions";
import toast from "react-hot-toast";

const db = getFirestore(app);

export const addMarkerToFirebase = async (data) => {
  try {
    await addDoc(collection(db, "markers"), data);
    return true;
  } catch (e) {
    toast.error(e.message);
    return false;
  }
};

export const deleteMarkerFirebase = async (uid) => {
  try {
    const q = query(collection(db, "markers"), where("uid", "==", uid));
    const snapshots = await getDocs(q);
    snapshots.forEach((d) => deleteDoc(doc(db, "markers", d.id)));
    return true;
  } catch (e) {
    toast.error(e.message);
    return false;
  }
};

onSnapshot(collection(db, "markers"), (doc) => {
  const data = doc.docs.reduce(
    (markers, marker) => [...markers, marker.data()],
    [],
  );
  setMarkers(data);
});
