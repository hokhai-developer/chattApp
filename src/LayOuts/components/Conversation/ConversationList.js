import React, { useContext } from 'react';
import classNames from 'classnames/bind';
import styles from './Conversation.module.scss';
import PropTypes from 'prop-types';
import { AppContext } from '~/Context/AppProvider';
import ConversationItem from '../ConversationItem';

const cx = classNames.bind(styles);
const ConversationList = ({ className, children }) => {
    const { conversations } = useContext(AppContext);
    console.log(conversations);
    return (
        <div className={cx('conversation-list')}>
            <ConversationItem />
        </div>
    );
};

ConversationList.propTypes = {};

export default ConversationList;
