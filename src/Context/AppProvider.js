import React, { useContext, useMemo } from 'react';
import useFirebaseStore from '~/hooks/useFirebaseStore';
import { AuthContext } from './AuthProvider';

export const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const { user } = useContext(AuthContext);
    console.log(user.uid);
    const conversationsConditions = useMemo(() => {
        return {
            fieldName: 'members', //[userId, userId, userId,.....]
            operator: 'array-contains',
            compareValue: user.uid,
        };
    }, [user.uid]);
    const conversations = useFirebaseStore('conversations', conversationsConditions, 'updatedAt');
    return <AppContext.Provider value={{ conversations }}>{children}</AppContext.Provider>;
};
export default AppProvider;
