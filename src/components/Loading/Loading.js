import React from 'react';
import classNames from 'classnames/bind';
import styles from './Loading.module.scss';
import PropTypes from 'prop-types';
import Container from '~/components/Container';
import CircularProgress from '@mui/material/CircularProgress';

const cx = classNames.bind(styles);
const Loading = ({ title }) => {
    return (
        <div className={cx('wrapper')}>
            <Container>
                <div className={cx('content')}>
                    <h3 className={cx('title')}>{title}</h3>
                    <div className={cx('progress')}>
                        <CircularProgress />
                    </div>
                </div>
            </Container>
        </div>
    );
};

Loading.propTypes = {};

export default Loading;
