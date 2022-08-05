import { signInWithPopup } from 'firebase/auth';
import { auth } from '~/firebase/config';

export const signInWithProvider = async (provider) => {
    try {
        const results = await signInWithPopup(auth, provider);
        if (results && results.user) {
            const { providerId } = results;
            const { displayName, email, photoURL, uid } = results.user;
            return {
                displayName,
                email,
                photoURL,
                uid,
                providerId,
            };
        }
    } catch (error) {
        console.log(error);
        return null;
    }
};
