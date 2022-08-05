import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Loading from '~/components/Loading';
import { auth } from '~/firebase/config';
import { onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState({});
    const navigate = useNavigate();
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { displayName, email, photoURL, uid } = user;
                setUser({ displayName, email, photoURL, uid });
                navigate('/', { replace: true });
            } else {
                setUser({});
                navigate('/login');
            }
        });
        setLoading(false);
        return () => {
            unsubscribed();
        };
    }, [auth]);
    return (
        <AuthContext.Provider value={{ user }}>
            {loading ? <Loading title={'Đang tải trang tiếp theo ... '} /> : children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {};

export default AuthProvider;
