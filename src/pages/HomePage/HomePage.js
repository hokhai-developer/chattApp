import React, { useContext, useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './HomePage.module.scss';
import PropTypes from 'prop-types';
import { AuthContext } from '~/Context/AuthProvider';
import { Outlet, useNavigate } from 'react-router-dom';
import Container from '~/components/Container';
import Loading from '../../components/Loading';
import Grid from '~/components/Grid';
import Row from '~/components/Row';
import Colum from '~/components/Colum';
import Contact from '../components/Contact';

const cx = classNames.bind(styles);
const HomePage = (props) => {
    const user = useContext(AuthContext);

    return <div className={cx('wrapper')}>this is home pages</div>;
};

HomePage.propTypes = {};

export default HomePage;
