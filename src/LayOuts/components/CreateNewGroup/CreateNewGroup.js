import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Modal from '~/components/Modal';
import { AppContext } from '~/Context/AppProvider';
import FormCreateConversationGroup from '~/components/FormCreateConversationGroup';

const CreateNewGroup = (props) => {
    const { showAddNewConversationGroup, setShowAddNewConversationGroup } = useContext(AppContext);
    return (
        <Modal setShowModal={setShowAddNewConversationGroup} showModal={showAddNewConversationGroup}>
            <FormCreateConversationGroup />
        </Modal>
    );
};

CreateNewGroup.propTypes = {};

export default CreateNewGroup;
