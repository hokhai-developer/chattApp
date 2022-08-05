import React from 'react';
import classNames from 'classnames/bind';
import styles from './Conversation.module.scss';
import PropTypes from 'prop-types';
import ConversationItem from '~/layOuts/components/Conversation';

const cx = classNames.bind(styles);
const Conversation = (props) => {
    return (
        <div className={cx('wrapper-conversation')}>
            <ConversationItem />
            <ConversationItem />
            <ConversationItem />
            <ConversationItem />
            <ConversationItem />
            <ConversationItem />
            <ConversationItem />
            <ConversationItem />
            <ConversationItem />
            <ConversationItem />
            <ConversationItem />
            <ConversationItem />
            <ConversationItem />
            <ConversationItem />
            <ConversationItem />
            <ConversationItem />
            <ConversationItem />
            <ConversationItem />
            <ConversationItem />
        </div>
    );
};

Conversation.propTypes = {};

export default Conversation;
