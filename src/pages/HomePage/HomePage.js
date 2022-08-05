import classNames from 'classnames/bind';
import { useContext } from 'react';
import { AuthContext } from '~/Context/AuthProvider';
import styles from './HomePage.module.scss';

const cx = classNames.bind(styles);
const HomePage = (props) => {
    return <div className={cx('wrapper')}>home page</div>;
};

HomePage.propTypes = {};

export default HomePage;
