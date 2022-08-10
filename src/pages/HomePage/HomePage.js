import classNames from 'classnames/bind';
import { useContext } from 'react';
import { AuthContext } from '~/Context/AuthProvider';
import HomeHeader from './components/HomeHeader';
import styles from './HomePage.module.scss';

const cx = classNames.bind(styles);
const HomePage = (props) => {
    return (
        <div className={cx('wrapper')}>
            <HomeHeader />
        </div>
    );
};

HomePage.propTypes = {};

export default HomePage;
