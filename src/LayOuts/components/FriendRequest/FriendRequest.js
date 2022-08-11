import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { AppContext } from '~/Context/AppProvider';
import Modal from '~/components/Modal';

const FriendRequest = (props) => {
    const { showFriendRequest, setShowFriendRequest } = useContext(AppContext);
    return (
        <Modal showModal={showFriendRequest} setShowModal={setShowFriendRequest}>
            <div>wrapper request</div>
        </Modal>
    );
};

FriendRequest.propTypes = {};

export default FriendRequest;
