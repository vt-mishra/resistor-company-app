import {
  query,
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "./firebase";

export const deviceTokenUpdate = (token) => {
//   console.log("token ===> ", token);
  if (token) {
    getDocs(
      query(collection(db, "firebaseToken"), where("deviceId", "==", token))
    )
      .then((querySnapshot) => {
        const newData = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        // console.log("todos", newData);
        if (newData.length == 0) {
          addDoc(collection(db, "firebaseToken"), {
            deviceId: token,
          })
            .then((docRef) => {
              console.log("Document written with ID: ", docRef.id);
            })
            .catch((e) => {
              console.error("Error adding document: ", e);
            });
        }
      })
      .catch((e) => {
        console.error("Error adding document: ", e);
      });
  }
};
