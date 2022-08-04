import React from 'react';
import classNames from 'classnames/bind';
import styles from './FormLogin.module.scss';
import PropTypes from 'prop-types';
import Image from '~/components/Image';
import images from '~/assets/images';
import { provider, auth } from '~/firebase/config';
import { signInWithPopup } from 'firebase/auth';
import { signInWithProvider } from '~/utils/signIn';

const cx = classNames.bind(styles);
const FormLogin = (props) => {
    const handleSignIn = async (provider) => {
        const user = await signInWithProvider(provider);
        if (user) {
        }
    };

    const handleLoginWithGoogle = (e) => {
        e.preventDefault();
        handleSignIn(provider.google);
    };
    const handleLoginWithFacebook = (e) => {
        e.preventDefault();
        handleSignIn(provider.facebook);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <form action="" className={cx('form-login')}>
                    <h3 className={cx('form-name')}>Đăng nhập thành viên</h3>
                    <p className={cx('form-desc')}>Cùng nhau kết nối tại Chat-app ❤️</p>
                    <div className={cx('form-group')}>
                        <button className={cx('form-btn', 'facebook')} onClick={(e) => handleLoginWithFacebook(e)}>
                            <Image src={images.logoFacebook} alt="Logo-facebook" className={cx('form-image')} />
                            <p className={cx('form-btn-title')}>Đăng nhập với Facebook</p>
                        </button>
                    </div>
                    <div className={cx('form-group')}>
                        <button className={cx('form-btn', 'google')} onClick={(e) => handleLoginWithGoogle(e)}>
                            <Image src={images.logoGoogle} alt="Logo-google" className={cx('form-image')} />
                            <p className={cx('form-btn-title')}>Đăng nhập với GooGle</p>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

FormLogin.propTypes = {};

export default FormLogin;
