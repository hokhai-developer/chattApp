import React, { useContext } from 'react';
import classNames from 'classnames/bind';
import styles from './Conversation.module.scss';
import PropTypes from 'prop-types';
import { AppContext } from '~/Context/AppProvider';
import ConversationItem from '../ConversationItem';
import moment from 'moment';

const cx = classNames.bind(styles);
const ConversationList = ({ className, children }) => {
    const { conversations } = useContext(AppContext);

    return (
        <div className={cx('conversation-list')}>
            <ConversationItem conversation={conversations[0]} />
        </div>
    );
};

ConversationList.propTypes = {};

export default ConversationList;
