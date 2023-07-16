import { db } from "../lib/firebase";
import { collection, getDocs } from "firebase/firestore";

export default async function getDoument() {

    let data = null;
    let error = null;

    try {
        let result = await getDocs(collection(db, "portfolio"));
        data = result.docs.map(doc => ({
            ...doc.data(),
            id: doc.id
        }))
        console.log(data);
    } catch (e) {
        error = e;
    }

    return { data, error };
}
