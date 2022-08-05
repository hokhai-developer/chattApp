import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { db } from '~/firebase/config';
import { collection, orderBy, query, where, onSnapshot } from 'firebase/firestore';

const useFirebaseStore = (collectionName, condition, q) => {
    const [documents, setDocuments] = useState([]);
    useEffect(() => {
        let collectionRef = collection(db, collectionName);
        if (q) {
            collectionRef = query(collectionRef, orderBy(q));
        }
        //condition
        // {
        //   fieldName:'abc',
        //   operator: 'in' array '=='string,
        //   compareValue: [] or string
        // }
        if (condition) {
            if (!condition.compareValue || condition.compareValue.length === 0) return;
            collectionRef = query(
                collectionRef,
                where(condition.fieldName, condition.operator, condition.compareValue),
            );
        }
        const unsubscribe = onSnapshot(collectionRef, (snapshot) => {
            const newDocuments = snapshot.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id,
            }));
            setDocuments(newDocuments);
        });
        return () => {
            unsubscribe();
        };
    }, [condition, collectionName, q]);
    return documents;
};

export default useFirebaseStore;
