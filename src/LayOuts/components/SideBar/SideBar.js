import React from 'react';
import classNames from 'classnames/bind';
import styles from './SideBar.module.scss';
import PropTypes from 'prop-types';
import Icon from '~/components/Icon';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import UserInfo from '../SideBarItem/UserInfo';
import SideBarItem from '../SideBarItem';
import LogOut from '../SideBarItem/LogOut';
import Message from '../SideBarItem/Message';
import Home from '../SideBarItem/Home';

const cx = classNames.bind(styles);
const SideBar = ({ className }) => {
    return (
        <div className={cx('wrapper', className)}>
            <section className={cx('section', 'top')}>
                <SideBarItem>
                    <Home />
                </SideBarItem>
                <SideBarItem className={cx('item-user')}>
                    <UserInfo />
                </SideBarItem>
                <SideBarItem>
                    <Message />
                </SideBarItem>
                <SideBarItem>
                    <LogOut />
                </SideBarItem>
            </section>
        </div>
    );
};

SideBar.propTypes = {};

export default SideBar;
