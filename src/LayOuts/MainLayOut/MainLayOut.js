import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './MainLayOut.module.scss';
import { Outlet } from 'react-router-dom';
import Container from '~/components/Container';
import SideBar from '~/layOuts/components/SideBar';
import Contact from '~/layOuts/components/Contact';

const cx = classNames.bind(styles);
const MainLayOut = (props) => {
    return (
        <div className={cx('wrapper')}>
            <Container>
                <div className={cx('container')}>
                    <SideBar />
                    <Contact />
                    <div className={cx('content')}>
                        <Outlet />
                    </div>
                </div>
            </Container>
        </div>
    );
};

MainLayOut.propTypes = {};

export default MainLayOut;
