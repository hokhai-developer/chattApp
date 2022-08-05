import { doc, serverTimestamp, setDoc } from 'firebase/firestore';
import { db } from './config';

export const setDocument = async (collection, data) => {
    try {
        await setDoc(
            doc(db, collection, data?.uid),
            {
                ...data,
                lastSeen: serverTimestamp(),
            },
            {
                merge: true,
            },
        );
    } catch (error) {
        console.log({ error });
    }
};
