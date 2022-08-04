import { signInWithPopup } from 'firebase/auth';
import { auth } from '~/firebase/config';

export const signInWithProvider = async (provider) => {
    try {
        const results = await signInWithPopup(auth, provider);
        if (results && results.user) {
            const { displayName, email, photoURL, uid } = results.user;
            return {
                displayName,
                email,
                photoURL,
                uid,
            };
        }
    } catch (error) {
        console.log(error);
        return null;
    }
};
