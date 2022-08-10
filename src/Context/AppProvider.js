import React, { useContext, useMemo, useState } from 'react';
import useFirebaseStore from '~/hooks/useFirebaseStore';
import { AuthContext } from './AuthProvider';

export const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const { user } = useContext(AuthContext);
    const [showAddNewConversationGroup, setShowAddNewConversationGroup] = useState(false);
    const [showFriendRequest, setShowFriendRequest] = useState(false);
    const conversationsConditions = useMemo(() => {
        return {
            fieldName: 'members', //[userId, userId, userId,.....]
            operator: 'array-contains',
            compareValue: user.uid,
        };
    }, [user.uid]);
    const conversations = useFirebaseStore('conversations', conversationsConditions, 'updatedAt');
    return (
        <AppContext.Provider
            value={{
                conversations,
                showAddNewConversationGroup,
                setShowAddNewConversationGroup,
                showFriendRequest,
                setShowFriendRequest,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};
export default AppProvider;
